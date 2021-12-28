import React, { useState } from "react";
import aquarium from "../../images/aquariumsetup.png";
import doseuse from "../../images/doseuse.png";
import brassage from "../../images/brassage.png";
import ecumeur from "../../images/ecumeur.png";
import eclairage from "../../images/eclairage.png";
import remonte from "../../images/remonte.png";
import ImageEquipements from "./ImageEquipements";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DeleteIcon from "@mui/icons-material/Delete";
import { useDrop } from "react-dnd";

const listOfImageEquipements = [
  {
    title: "Aquarium",
    id: 1,
    src: aquarium,
    alt: "example aquarium",
  },
  {
    title: "Pompe doseuse",
    id: 2,
    src: doseuse,
    alt: "exemple pompe doseuse",
  },
  {
    title: "Pompe de brassage",
    id: 3,
    src: brassage,
    alt: "exemple pompe de brassage",
  },
  {
    title: "Ecumeurs",
    id: 4,
    src: ecumeur,
    alt: "exemple ecumeur",
  },
  {
    title: "Rampe Led",
    id: 5,
    src: eclairage,
    alt: "exemple rampe led",
  },
  {
    title: "Pompe de remontées",
    id: 6,
    src: remonte,
    alt: "exemple pompe de remontées",
  },
];

const DragAndDrop = () => {
  const [aquaBoard,setAquaBoard] = useState([]);
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
    
  <span><strong>Glissez/Déposez</strong> un équipement pour créer votre aquarium</span>
  <KeyboardDoubleArrowDownIcon sx={{fontSize:'145px', color:'black'}}/>
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DragAndDrop;
