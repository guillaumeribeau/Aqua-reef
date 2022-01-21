import React, { useContext, useEffect, useRef, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../context/UserContext";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const CardFish = ({
  name,
  latin,
  photo,
  alt,
  volume,
  longevity,
  size,
  description,
  newCardFish,
  card,
  addFishButtonProps,
}) => {
  const { currentUser } = useContext(UserContext);

  const [addCardInAquarium, setAddCardInAquarium] = useState([]);
  const [isclicked, setIsClicked] = useState(false);
  const [addFishButton, setAddFishButton] = useState(addFishButtonProps);

  const addCardFishInMyAquarium = async () => {
    const fishCard = newCardFish.filter((cardPop) => card.id === cardPop.id);

    await addDoc(collection(db, "users", currentUser.uid, "MyPopulation"), {
      fishCard: fishCard[0],
      time: serverTimestamp(),
    });

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };

  const removeCardFish = async () => {
    await deleteDoc(doc(db, "users", currentUser.uid, "MyPopulation", card.id));
  };
  console.log(addCardInAquarium);

  return (
    <>
      <div className="card-wrapper-fish">
        {isclicked && (
          <div className="message-add-fish-ok">
            Poisson ajouter à votre aquarium
          </div>
        )}
        {addFishButton ? (
          <div className="add-fish-container">
            <span>Ajouter ce poisson</span>

            <AddIcon
              onClick={addCardFishInMyAquarium}
              sx={{
                fontSize: "40px",
                marginRight: "5px",
                cursor: "pointer",
                "&:hover": {
                  color: "blue",
                  fontSize: "45px",
                },
              }}
            />
          </div>
        ) : (
          <div className="add-fish-container">
            <span>Supprimer ce poisson</span>

            <DeleteIcon
              onClick={() => removeCardFish()}
              sx={{
                fontSize: "40px",
                marginRight: "5px",
                cursor: "pointer",
                "&:hover": {
                  color: "blue",
                  fontSize: "45px",
                },
              }}
            />
          </div>
        )}

        <div className="card">
          <div className="card-fish-front">
            <div className="title-fish">
              <h2>{name}</h2>
              <h2>({latin})</h2>
            </div>
            <img src={photo} alt={alt} />
            <div className="legend-fish">
              <h2>Volume: {volume}</h2>
              <h2>Age: {longevity}</h2>
              <h2>Taille:{size} cm</h2>
            </div>
          </div>
          <div className="card-fish-back">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFish;
