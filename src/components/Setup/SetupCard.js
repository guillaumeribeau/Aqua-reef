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
  deleteDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebase/firebaseConfig";
import DeleteIcon from "@mui/icons-material/Delete";

const SetupCard = ({
  openSetup,
  setOpenSetup,
  setup,
  oneFilter,
  setOneFilter,
}) => {
  const { currentUser } = useContext(UserContext);

  // permet de filtrer le setup qu'on souhaite afficher
  const displaySetupSelected = () => {
    const oneSetup = openSetup.filter((el) => el.id === setup.id);
    setOneFilter(oneSetup);
  };

  // supprime le setup
  const deleteSetup = async () => {
    await deleteDoc(doc(db, "users", currentUser.uid, "setup", setup.id));
  };

  return (
    <div className="container-setup-card">
      <div className="header-setup-card">
        <span></span>
        <DeleteIcon onClick={deleteSetup} />
      </div>
      <img src={exampleAqua} alt="aquarium" />
      <div onClick={displaySetupSelected} className="header-setup-card">
        <span>Ouvrir le Setup</span>
        <FolderOpenIcon />
      </div>
    </div>
  );
};

export default SetupCard;
