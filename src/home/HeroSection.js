import React, { useContext } from "react";

import recifalVideo from "../images/recifal.mp4";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import Clown from "../animation3d/Clown";
import HomeNav from "./HomeNav";
import ScrollBtn from "../components/loader/ScollBtn";
/**
 * display Hero section
 * @components
 *
 */

const HeroSection = () => {
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
          <HomeNav />
        </div>
        <div class="container-title-hero">
          <div class="title-hero">
           {/* // <Clown /> */}
            <h1>AQUA</h1>
            <h2>Reef Gest</h2>
            {/* <img src={heroImg} alt="" /> */}
          </div>
<ScrollBtn bottomPosition={15} />
         
        </div>
      </div>
    </>
  );
};

export default HeroSection;
