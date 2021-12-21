import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  // s'inscrire méhode firebase 9
  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);
// s'identifier methode firebase 9
const signIn = (email, pwd) =>{
  signInWithEmailAndPassword(auth, email , pwd)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   console.log(user);
  })

}
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  console.log("MAJ", currentUser);
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })

    return unsubscribe;

  }, [])

  // modal
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      });
    }
    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ modalState, toggleModals, currentUser, signUp, signIn }}
    >
      {!loadingData && children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
