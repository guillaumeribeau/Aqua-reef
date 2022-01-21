import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SetMealIcon from "@mui/icons-material/SetMeal";
import InsightsIcon from "@mui/icons-material/Insights";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import SaveIcon from "@mui/icons-material/Save";

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
  const { currentUser } = useContext(UserContext);

  // useEffect for Main picture
  useEffect(() => {
    //method firebase
    const unsub = onSnapshot(
      doc(db, "users", currentUser.uid, "aquarium", "infos-aqua"),
      (doc) => {
        console.log("Current data: ", doc.data());
        setInfosAqua(doc.data());
      }
    );

    return unsub;
  }, []);

  return (
    <>
    {infosAqua && 
      <div className="container-dashboard-navigation ">
        <div className="title-header-dashboard">
          <h3>Bienvenue {currentUser.displayName}</h3>
        </div>
        <div className="header-dashboard">
          <img src={infosAqua.url} alt="logo de aqua gest reef" />
        </div>

        <div className="legend-header-dashboard">
          Votre Aquarium
          <span className="title-aqua">{infosAqua.name}</span>
          <span className="title-aqua">{infosAqua.volume}L</span> 
          <span className="title-aqua">{infosAqua.selectedRadio}</span>
        </div>
        <nav className="nav-dashboard">
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
              Les fiches poissons
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
              Ajoutez un aquarium
            </Link>
          </div>
          <div className="link-nav">
            <SaveIcon />
            <Link
              className="link-nav-dashboard"
              activeClassName="active-link-nav-dashboard"
              to="/private/setupRegister"
            >
              Mes Setups Enregistrer
            </Link>
          </div>
        </nav>
      </div>
}
    </>
  );
};

export default DashboardNavigation;
