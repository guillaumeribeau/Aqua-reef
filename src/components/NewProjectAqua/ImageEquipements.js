import React, { useContext, useRef, useState } from "react";
import { useDrag } from "react-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { listOfImageEquipements } from "./DataEquipements";
const ImageEquipements = ({
  alt,
  title,
  id,
  src,
  IconDelete,
  aquaBoard,
  setAquaBoard,
  picture,
}) => {
  const [deleteIconVisible, setDeleteIconVisible] = useState(IconDelete);

  const { currentUser, mobile } = useContext(UserContext);

  // fonction drag
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const deleteEquipementOnBoard = () => {
    console.log(aquaBoard);
    setAquaBoard(aquaBoard.filter((el) => el.id !== picture.id));
  };

  //pour version mobile
  const addImageToAquaBoard = () => {
    if (mobile.hamburger) {
      const pictureList = listOfImageEquipements.filter(
        (picture) => id === picture.id
      );
      console.log(pictureList);
      setAquaBoard((board) => [...board, pictureList[0]]);
    }
  };

  return (
    <>
      {deleteIconVisible ? (
        <div
          ref={drag}
          className={
            mobile.hamburger ? "mobile-image-equipement" : "image-equipement"
          }
          style={{ border: isDragging ? "3px solid blue" : "" }}
        >
          <div className="container-delete">
            <span>{title}</span>
            <DeleteIcon
              onClick={deleteEquipementOnBoard}
              sx={{
                fontSize: "25px",
                color: "black",
                cursor: "pointer",
                zIndex: "1",
              }}
            />
          </div>
          <img src={src} alt={alt} />
        </div>
      ) : (
        <div
          ref={drag}
          onClick={addImageToAquaBoard}
          className={
            mobile.hamburger ? "mobile-image-equipement" : "image-equipement"
          }
          style={{ border: isDragging ? "3px solid blue" : "" }}
        >
          <div className="container-delete">
            <span>{title}</span>
          </div>
          <img src={src} alt={alt} />
        </div>
      )}
    </>
  );
};

export default ImageEquipements;
