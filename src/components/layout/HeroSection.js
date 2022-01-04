import React, { useContext } from "react";
import heroImg from "../../images/clown.png";
import fishUp from "../../images/fish-up.png";
import recifalVideo from "../../images/recifal.mp4";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
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
        <video muted loop autoPlay>
          <source src={recifalVideo} type="video/mp4" />
        </video>
        {/* effet parallax je remplacerai par des composants */}
        <div className="presentation-fonctionnality"> </div>
        <div className="presentation-fonctionnality-2"></div>
        <div className="presentation-fonctionnality-3"></div>
        <div className="presentation-fonctionnality-4"></div>
        <div className="container-navigation-home">
          {/* /*---------------------------------------------------*/}
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
            <Link className="btn-home" to="/private/dashboard">
              dashboard
            </Link>
          </div>
        </div>

        <div class="container-title-hero">
          <div class="title-hero">
            <h1>AQUA</h1>
            <h2>Reef Gest</h2>
            {/* <img src={heroImg} alt="" /> */}
          </div>
          <div className="container-scroll-btn">
            <div class="scrolldown">
              <div class="chevrons">
                <div class="chevrondown"></div>
                <div class="chevrondown"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
