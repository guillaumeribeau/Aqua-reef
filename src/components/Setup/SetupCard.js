import exampleAqua from "../../images/aquariumsetup.png";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ImageEquipements from "../NewProjectAqua/ImageEquipements";
import {
  collection,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebase/firebaseConfig";
import DeleteIcon from "@mui/icons-material/Delete";

const SetupCard = ({ openSetup, setOpenSetup,setup}) => {
 
  const { currentUser } = useContext(UserContext);

const displaySetupSelected = () => {
setOpenSetup(openSetup.filter((el)=> el.id === setup.id))
  
}

 

  const closeSetup = () => {};

  return (
    <div className="container-setup-card">
      <div className="header-setup-card">
        <span></span>
        <DeleteIcon />
      </div>
      <img src={exampleAqua} alt="aquarium" />
      <div  onClick={displaySetupSelected} className="header-setup-card">
        <span>Ouvrir le Setup</span>
        <FolderOpenIcon />
      </div>
    </div>
  );
};

export default SetupCard;
