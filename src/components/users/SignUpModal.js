import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { updateCurrentUser } from "firebase/auth";
import WelcomeModals from "../welcome/WelcomeModals";

export default function SignUpModal() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);
  const [displayWelcomeModals,setDiplayWelcomeModals]=useState(false)

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
      (inputs.current[2].value.length || inputs.current[3].value.length) < 6
    ) {
      setValidation("6 characters min");
      return;
    } else if (inputs.current[2].value !== inputs.current[3].value) {
      setValidation("Passwords do not match");
      return;
    }
    // on utilise la methode signup definit dans notre userContext avec les champs remplis dans le signup
    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value,
        inputs.current[2].value
      );
       console.log(cred);
      toggleModals("close");
      setDiplayWelcomeModals(true)
 
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


  return (
    <>
    {displayWelcomeModals && <WelcomeModals setDiplayWelcomeModals={setDiplayWelcomeModals}/>}
      {modalState.signUpModal && (
        <div className="fixed-container-modals">
          <div onClick={closeModal} className="container-modals"></div>
          <div className="modals">
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
                    <div className="container-label">
                      <label htmlFor="signUpEmail" className="form-label">
                        Votre Mail
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
                    <div className="container-label">
                      <label htmlFor="signUpEmail" className="form-label">
                        Votre Pseudo
                      </label>
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="texte"
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="container-label">
                      <label htmlFor="signUpPwd" className="form-label">
                        Mot de passe
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

                    <div className="container-label">
                      <label htmlFor="repeatPwd" className="form-label">
                        Confirmer le mot de passe{" "}
                      </label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                      />
                      <p className="text-danger">{validation}</p>
                    </div>

                    <button className="btn-modals">Submit</button>
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
