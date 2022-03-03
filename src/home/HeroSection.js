import React, { useContext } from "react";
import bgHome from '../images/sea-bg-4.jpg'

import { useNavigate } from "react-router-dom";


import HomeNav from "./HomeNav";

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
   <img src={bgHome} alt="" />

        <HomeNav />

        <div class="container-title-hero">
          <div class="title-hero">
            <h1>AQUA</h1>
            <h2>Reef Gest</h2>
          </div>
    
        </div>
      </div>
    </>
  );
};

export default HeroSection;
