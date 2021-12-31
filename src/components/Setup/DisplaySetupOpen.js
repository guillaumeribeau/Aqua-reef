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

const DisplaySetupOpen = ({title, src,alt}) => {
  return (
    <>
      <div className="image-equipement">
        <div className="container-delete">
          <span>{title}</span>
        </div>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};

export default DisplaySetupOpen;
