import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { updateCurrentUser } from "firebase/auth";

export default function SignUpModal() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");
  // permet d'ajouter une ref dans un tableau de current et on peut ensuite venir selectionner le inputs qu'on l'on souhaite.
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  // reference pour le formulaire
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    // validation côté front
    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 characters min");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match");
      return;
    }
    // on utilise la methode signup definit dans notre userContext avec les champs remplis dans le signup
    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );

      toggleModals("close");
      navigate("/private/dashboard");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setValidation("Email format invalid");
      }

      if (err.code === "auth/email-already-in-use") {
        setValidation("Email already used");
      }
    }
  };
  // ferme la modale et remet les forms à zéro
  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };
  // essai de créer une collection user avec l'uid de l'authentifiaction
  const createUserWithUid = async () => {
    if (inputs.current[0] !== undefined) {
      await setDoc(doc(db, "users", currentUser.uid), {
        email: inputs.current[0].value,
      });
    }
  };

  createUserWithUid();

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={closeModal}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button onClick={closeModal} className="btn-close"></button>
                </div>

                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Email adress
                      </label>
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">
                        Password
                      </label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signUpPwd"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="repeatPwd" className="form-label">
                        Repeat Password
                      </label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
