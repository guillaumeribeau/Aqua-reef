import React, { useContext } from "react";
import heroImg from "../../images/3redseatank.png"
import Navigation from "../layout/Navigation";
import SectionSetup from "../../pages/SetupRegister";
import SetupCard from "../Setup/SetupCard";
import { Link } from "react-router-dom";
import { UserContext} from "../../context/UserContext"


import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
/**
 * display Hero section
 * @components
 *
 */

const HeroSection = () => {
  const { toggleModals } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="hero-section">
        <div className="hero-title">
          <h1>Aqua Gest Reef</h1>
          <h2>La sereinité de son budget Reef</h2>
        </div>
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
        </div>
        <div className="container-title-img">
          <div className="hero-img">
            <img src={heroImg} alt="aquarium presentation trois volumes" />
          </div>
        </div>

        <div className="container-menu-function">
          <div className="card-menu-function">Créer son setup</div>
          <div className="card-menu-function">Maîtriser son budget</div>
          <div className="card-menu-function">Exemple de Setup</div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
