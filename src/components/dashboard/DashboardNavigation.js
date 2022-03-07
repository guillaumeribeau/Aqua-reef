import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import WaterIcon from '@mui/icons-material/Water';
import SetMealIcon from "@mui/icons-material/SetMeal";
import InsightsIcon from "@mui/icons-material/Insights";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from '@mui/icons-material/Settings';
import { UserContext } from "../../context/UserContext";
import {
  collection,
  doc,
  DocumentSnapshot,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
/**
 * dashboard naviagation
 * @components
 */

const DashboardNavigation = () => {
  const [infosAqua, setInfosAqua] = useState([]);
  const { currentUser, mobile, setMobile } = useContext(UserContext);

  // useEffect for Main picture
  useEffect(() => {
    //method firebase
    const unsub = onSnapshot(
      doc(db, "users", currentUser.uid, "aquarium", "infos-aqua"),
      (doc) => {
   
        setInfosAqua(doc.data());
      }
    );

    return unsub;
  }, []);

  
  const closeNav = () => {
    if (mobile.hamburger) {
      setMobile({
        ...mobile,
        menu: !mobile.hamburger,
        display: !mobile.display,
      });
    }
  };

  return (
    <>
      <div
        onClick={closeNav}
        className={mobile.display ? "fixed-container-modals" : ""}
      >
        <div className={mobile.display ? "container-modals" : ""}></div>
        <div
          onClick={closeNav}
          className={
            mobile.display && mobile.hamburger
              ? "mobile"
              : "dashboard-navigation"
          }
        >
          <div className="title-header-dashboard">
            <h3>Bienvenue {currentUser.displayName}</h3>
          </div>
          <div className="header-dashboard">
            <img
              src={infosAqua && infosAqua.url}
              alt="logo de aqua gest reef"
            />
          </div>

          <div className="legend-header-dashboard">
            Votre Aquarium
            <span className="title-aqua">{infosAqua && infosAqua.name}</span>
            <span className="title-aqua">{infosAqua && infosAqua.volume}L</span>
            <span className="title-aqua">
              {infosAqua && infosAqua.selectedRadio}
            </span>
          </div>
          <nav className="nav-dashboard">
          <div className="link-nav">
              <WaterIcon />
              <Link className="link-nav-dashboard" to="/private/dashboard">
        Mon aquarium
              </Link>
            </div>
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
                to="/private/cardFish"
              >
               Ajouter des poissons
              </Link>
            </div>
            <div className="link-nav">
              <FavoriteBorderIcon />
              <Link
                className="link-nav-dashboard"
                activeClassName="active-link-nav-dashboard"
                to="/private/mypopulation"
              >
                Ma population
              </Link>
            </div>
            <div className="link-nav">
              <CreateNewFolderIcon />
              <Link
                className="link-nav-dashboard"
                activeClassName="active-link-nav-dashboard"
                to="/private/createSetup"
              >
                Créer un setup
              </Link>
            </div>
            <div className="link-nav">
              <SaveIcon />
              <Link
                className="link-nav-dashboard"
                activeClassName="active-link-nav-dashboard"
                to="/private/setupRegister"
              >
                Mes setups enregistrer
              </Link>
            </div>
            <div className="link-nav">
              <SettingsIcon />
              <Link
                className="link-nav-dashboard"
                activeClassName="active-link-nav-dashboard"
                to="/private/aqua-settings"
              >
                Réglages aquarium
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DashboardNavigation;
