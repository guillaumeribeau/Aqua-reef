import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function SignInModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(inputs.current[1].value);
   console.log(inputs.current[0].value);
    await signIn(inputs.current[0].value, inputs.current[1].value);

    setValidation("");
  formRef.current.reset()
    await toggleModals("close");
    navigate("/private/dashboard");

    //catch setValidation("Wopsy, email and/or password incorrect");
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="fixed-container-modals">
          <div onClick={closeModal} className="container-modals"></div>
          <div className="modals">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign In</h5>
                  <button onClick={closeModal} className="btn-close"></button>
                </div>

                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form"
                  >
                    <div className="container-label">
                      <label htmlFor="signInEmail" className="form-label">
                        Adresse Mail
                      </label>
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signInEmail"
                      />
                    </div>

                    <div className="container-label">
                      <label htmlFor="signInPwd" className="form-label">
                        Mot de passe
                      </label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signInPwd"
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
