import React, { useContext, useRef, useState } from "react";
import { useDrag } from "react-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
const ImageEquipements = ({
  alt,
  title,
  id,
  src,
  IconDelete,
  aquaBoard,
  setAquaBoard,
  picture,
  nameEquipement,
  setNameEquipement,
  priceEquipement,
  setPriceEquipement
}) => {
  const [deleteIconVisible, setDeleteIconVisible] = useState(IconDelete);
 
  const [editToggleName, setEditToggleName] = useState(true);
  const [editTogglePrice, setEditTogglePrice] = useState(true);
  const inputNameEquipement = useRef();
  const inputPriceEquipement = useRef();
  const { currentUser } = useContext(UserContext);

  // fonction drag
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const toggleName = () => {
    setEditToggleName(!editToggleName);
  };
  const togglePrice = () => {
    setEditTogglePrice(!editTogglePrice);
  };

  const deleteEquipementOnBoard = () => {
    console.log(aquaBoard);
    setAquaBoard(aquaBoard.filter((el) => el.id !== picture.id));
  };

  const registerNameEquipement = (e) => {
    e.preventDefault();
   setNameEquipement(inputNameEquipement.current.value)
    setEditToggleName(false);
  };
  const registerPriceEquipement = (e) => {
    e.preventDefault();
  setPriceEquipement(inputPriceEquipement.current.value)
    setEditTogglePrice(false);
  };

  const logiqueInputDisplay = (
    <>
      <div className="container-input-equipement">
        {editToggleName ? (
          <>
            <input
              ref={inputNameEquipement}
              className="input-title-equipement"
              placeholder="réference de l'équipement"
            />
            <CheckIcon
              onClick={registerNameEquipement}
              sx={{ cursor: "pointer" }}
            />
          </>
        ) : (
          <>
            <span>{nameEquipement}</span>
            <EditIcon onClick={toggleName} sx={{ cursor: "pointer" }} />
          </>
        )}
      </div>
      <div className="container-input-equipement">
        {editTogglePrice ? (
          <>
            <input
              ref={inputPriceEquipement}
              className="input-price-equipement"
              placeholder="prix en euros"
            />
            <CheckIcon
              onClick={registerPriceEquipement}
              sx={{ cursor: "pointer" }}
            />
          </>
        ) : (
          <>
            <span>{priceEquipement}</span>
            <EditIcon onClick={togglePrice} sx={{ cursor: "pointer" }} />
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      {deleteIconVisible ? (
        <div
          key={id}
          ref={drag}
          className="image-equipement"
          style={{ border: isDragging ? "3px solid blue" : "" }}
        >
          <div className="container-delete">
            <span>{title}</span>
            <DeleteIcon
              onClick={deleteEquipementOnBoard}
              sx={{ fontSize: "25px", color: "black", cursor: "pointer" }}
            />
          </div>
          <img src={src} alt={alt} />
           {logiqueInputDisplay}

        </div>
      ) : (
        <div
          key={id}
          ref={drag}
          className="image-equipement"
          style={{ border: isDragging ? "3px solid blue" : "" }}
        >
          <span>{title}</span>
          <img src={src} alt={alt} />
     
        </div>
      )}
    </>
  );
};

export default ImageEquipements;
