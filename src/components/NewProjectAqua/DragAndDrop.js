import React, { useContext, useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDrop } from "react-dnd";
import { listOfImageEquipements } from "./DataEquipements";
import ImageEquipements from "./ImageEquipements";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { UserContext } from "../../context/UserContext";
import { v4 as uuidv4 } from 'uuid';
const DragAndDrop = () => {
  const { currentUser } = useContext(UserContext);
  const [nameEquipement, setNameEquipement] = useState("");
  const [priceEquipement, setPriceEquipement] = useState("");
  const [aquaBoard, setAquaBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addImageToAquaBoard(item.id), // on recupère l'id dragger
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), // booléan indicate is drop or not
    }),
  }));
  // filtrer l'image dragguer
  const addImageToAquaBoard = (id) => {
    const pictureList = listOfImageEquipements.filter(
      (picture) => id === picture.id
    );
    setAquaBoard((board) => [...board, pictureList[0]]);
  };

  // register setup in firebase

  const registerSetup = async () => {
    const docRef = await addDoc(
      collection(db, "users", currentUser.uid, "setup"),
      {
        aquaBoard,
        timestamp: serverTimestamp(),
      }
    );
    setAquaBoard([]);
  };
  return (
    <>
      <div className="container-drag-drop-board">
        <div className="container-image-equipements">
          {listOfImageEquipements.map((picture) => {
            return (
              <ImageEquipements
                alt={picture.alt}
                key={picture.id}
                src={picture.src}
                title={picture.title}
                IconDelete={false}
                id={picture.id}
              />
            );
          })}
        </div>
        <div className="instruction">
          <span>
            <strong>Glissez/Déposez</strong> un équipement pour créer votre
            aquarium
          </span>
          <KeyboardDoubleArrowDownIcon
            sx={{ fontSize: "145px", color: "black" }}
          />
        </div>
        <div className="aqua-project-board" ref={drop}>
          {aquaBoard.map((picture) => {
            return (
              <ImageEquipements
                alt={picture.alt}
                key={picture.id}
                id={picture.id}
                src={picture.src}
                title={picture.title}
                IconDelete={true}
                aquaBoard={aquaBoard}
                setAquaBoard={setAquaBoard}
                picture={picture}
                nameEquipement={nameEquipement}
                priceEquipement={priceEquipement}
                setNameEquipement={setNameEquipement}
                setPriceEquipement={setPriceEquipement}
              />
            );
          })}
        </div>
        <button onClick={registerSetup} className="btn-register-setup">
          Enregistrer mon setup
        </button>
      </div>
    </>
  );
};

export default DragAndDrop;
