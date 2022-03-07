import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  // s'inscrire méhode firebase 9
  const signUp = async (email, pseudo, pwd) => {
    try {
      await createUserWithEmailAndPassword(auth, email, pwd);

      await updateProfile(auth.currentUser, { displayName: pseudo });
    } catch (err) {
     
    return err
    }
  };
  // s'identifier methode firebase 9
  const signIn = (email, pwd) => {
    signInWithEmailAndPassword(auth, email, pwd);
  };

  const [currentUser, setCurrentUser] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

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

  // context du menu mobile
  const [mobile, setMobile] = useState({
    hamburger: false,
    display: false,
  });

  useEffect(() => {
    if (window.innerWidth < 1000) {
      console.log("1000px ok ");
      setMobile({ ...mobile, hamburger: !mobile.hamburger });
    }
  }, []);


  // theme dark 
const [theme,setTheme]=useState('light')





  return (
    <UserContext.Provider
      value={{
        modalState,
        toggleModals,
        currentUser,
        signUp,
        signIn,
        mobile,
        setMobile,
        theme,
        setTheme
      }}
    >
      {!loadingData && children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
