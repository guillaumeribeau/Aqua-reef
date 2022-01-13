import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const HomeNav = () => {

    const { toggleModals } = useContext(UserContext);
    return (
        <>
        <div className="container-btn-home">
        <Link
          onClick={() => toggleModals("signUp")}
          className="btn-home"
          to="/"
        >
          S'inscrire
        </Link>
        <Link
          onClick={() => toggleModals("signIn")}
          className="btn-home"
          to="/"
        >
          Se connecter
        </Link>
        <Link className="btn-home" to="/private/analyse">
          dashboard
        </Link>
      </div>
    </>
    );
};

export default HomeNav;