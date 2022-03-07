import React, { useContext, useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDrop } from "react-dnd";
import { listOfImageEquipements } from "./DataEquipements";
import ImageEquipements from "./ImageEquipements";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { UserContext } from "../../context/UserContext";
import { v4 as uuidv4 } from "uuid";
import LoaderPoint from "../loader/LoaderPoint";
const MobileProjectAqua = () => {
  const { currentUser } = useContext(UserContext);
  const [nameEquipement, setNameEquipement] = useState("");
  const [priceEquipement, setPriceEquipement] = useState("");
  const [aquaBoard, setAquaBoard] = useState([]);
  const [isRegister, setIsRegister] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  // register setup in firebase

  const registerSetup = async () => {
    if (aquaBoard.length >= 1) {
      setLoader(true);
      const docRef = await addDoc(
        collection(db, "users", currentUser.uid, "setup"),
        {
          aquaBoard,
          timestamp: serverTimestamp(),
        }
      );
      await setLoader(false);
      setIsRegister(true);
      setAquaBoard([]);
      setUserMessage("Votre setup est enregistrer");
      setTimeout(() => {
        setIsRegister(false);
      }, 2000);
    } else {
      setIsRegister(true);
      setError(true);
      console.log("error");
      setUserMessage("vous devez mettre au moins un équipement !");
    }
  };

  const closeErrorMessage = () => {
    setUserMessage("");
    setError(false);
    setIsRegister(false);
  };
  return (
   <>
      <div className="mobile-project-equipement">
        <h2>Choix d'équipements</h2>
        <h4>Cliquez sur l'équipement de votre choix</h4>
        <div className="project-mobile">
        {listOfImageEquipements.map((picture) => {
          return (
            <ImageEquipements
              alt={picture.alt}
              key={picture.id}
              src={picture.src}
              title={picture.title}
              IconDelete={false}
              id={picture.id}
              picture={picture}
              setAquaBoard={setAquaBoard}
            />
          );
        })}
      </div>
</div>
      <div className="mobile-project-board">
     
          <div className="image-project-board">
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
          <div className="container-register-mobile-btn">
            <button
              className="btn "
              onClick={registerSetup}
            >
              Enregistrer mon setup
            </button>
            {loader && <LoaderPoint />}
            {isRegister && (
              <div
                className={error ? "setup-register-error" : "setup-register-ok"}
              >
                {error && <span onClick={closeErrorMessage}>close</span>}
                {userMessage}
              </div>
            )}
          </div>
    </div>

    </>
  );
};

export default MobileProjectAqua;
