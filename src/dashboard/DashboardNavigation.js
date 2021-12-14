import React from "react";
import { Link } from "react-router-dom";
import aquariumExample from "../images/example_aqua.png";
import SetMealIcon from "@mui/icons-material/SetMeal";
import InsightsIcon from "@mui/icons-material/Insights";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import SaveIcon from "@mui/icons-material/Save";
/**
 * dashboard naviagation
 * @components
 */

const DashboardNavigation = () => {
  return (
    <div className="container-dashboard">
      <div className="title-header-dashboard">
        <h3>Bienvenue chez Aqua Reef Gest</h3>
      </div>
      <div className="header-dashboard">
        <img src={aquariumExample} alt="logo de aqua gest reef" />
        <div className="legend-header-dashboard">
          <h3>
            Mon aquarium: <span>Red sea 350L</span>
          </h3>
        </div>
      </div>

      <nav>
        <div className="link-nav">
          <InsightsIcon />
          <Link className="link-nav-dashboard" to="/private/analyse">
            Analyse de l'eau
          </Link>
        </div>
        <div className="link-nav">
          <SetMealIcon />
          <Link
            className="link-nav-dashboard"
            activeClassName="active-link-nav-dashboard"
            to="/population"
          >
            Ma Population
          </Link>
        </div>
        <div className="link-nav">
          <FavoriteBorderIcon />
          <Link
            className="link-nav-dashboard"
            activeClassName="active-link-nav-dashboard"
            to="/reproduction"
          >
            Reproduction
          </Link>
        </div>
        <div className="link-nav">
          <CreateNewFolderIcon />
          <Link
            className="link-nav-dashboard"
            activeClassName="active-link-nav-dashboard"
            to="/createSetup"
          >
            Ajoutez un aquarium
          </Link>
        </div>
        <div className="link-nav">
          <SaveIcon />
          <Link
            className="link-nav-dashboard"
            activeClassName="active-link-nav-dashboard"
            to="/setupRegister"
          >
            Mes Setups Enregistrer
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavigation;
