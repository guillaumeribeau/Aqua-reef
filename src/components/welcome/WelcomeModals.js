import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState, useRef } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { db, storage } from "../../firebase/firebaseConfig";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBack from "@mui/icons-material/ArrowBack";
import exampleAqua from '../../images/aquariumsetup.png';

const customStyleArrow = {
  fontSize: "75px",
  color: "#e63946",
  cursor: "pointer",
};

const WelcomeModals = ({ setDiplayWelcomeModals }) => {
  const [file, setFile] = useState('');
  const [name, setName] = useState("");
  const [volume, setVolume] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["recifal", "mixte", "fish-only"];

  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  // display forms step by step
  const [displayName, setDisplayName] = useState(true);
  const [displayVolume, setDisplayVolume] = useState(false);
  const [displayType, setDisplayType] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState(false);
  const [displayValidation, setDisplayValidation] = useState(false);

  const onFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleSubmitnewAqua = async (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `/images/fishCardImages/${file.name}`);
    await uploadBytes(storageRef, file);
   
   
    // permet de stocker url dans firestore
    await getDownloadURL(storageRef).then((url) => {
      setDoc(doc(db, "users", currentUser.uid, "aquarium", "infos-aqua"), {
        url: url,
        time: serverTimestamp(),
        name: name,
        volume: volume,
        selectedRadio: selectedRadio,
      });
    });
    e.target.reset();
    navigate("/private/cardfish");
  };

  const closeModals = () => {
    setDiplayWelcomeModals(false);
  };

  return (
    <div className="fixed-container-modals">
      <div onClick={closeModals} className="container-modals"></div>

      <form onSubmit={handleSubmitnewAqua} className="welcome-form">
        {displayName && (
          <>
            <div>
              {" "}
              <h2>
                Bienvenue sur Aqua Reef <br></br>
              </h2>
            </div>

            <label htmlFor="name">Donnez un nom à votre Aquarium</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder=""
            />
            <div className="container-arrow first-arrow">
              <ArrowRightAltIcon
                sx={customStyleArrow}
                onClick={() => {
                  setDisplayVolume(true);
                  setDisplayName(false);
                }}
              />
            </div>
          </>
        )}

        {displayVolume && (
          <>
            <label for="volume">Quel est le volume de votre Aquarium ? </label>
            <input
              onChange={(e) => setVolume(e.target.value)}
              type="text"
              id="volume"
              placeholder=""
            />
            <div className="container-arrow">
              <span
                onClick={() => {
                  setDisplayName(true);
                  setDisplayVolume(false);
                }}
              >
                Revenir en arrière
              </span>
              <ArrowRightAltIcon
                sx={customStyleArrow}
                onClick={() => {
                  setDisplayType(true);
                  setDisplayVolume(false);
                }}
              />
            </div>
          </>
        )}
        {displayType && (
          <>
            <label for="type">Quel est le type ? </label>
            {radios.map((radio) => {
              return (
                <li key={radio}>
                  <label htmlFor={radio}>{radio}</label>
                  <input
                    type="radio"
                    value={radio}
                    id={radio}
                    checked={radio === selectedRadio}
                    onChange={(e) => setSelectedRadio(e.target.value)}
                  />
                </li>
              );
            })}
            <div className="container-arrow">
              <span
                onClick={() => {
                  setDisplayType(false);
                  setDisplayVolume(true);
                }}
              >
                Revenir en arrière
              </span>
              <ArrowRightAltIcon
                sx={customStyleArrow}
                onClick={() => {
                  setDisplayType(false);
                  setDisplayPhoto(true);
                }}
              />
            </div>
          </>
        )}

        {displayPhoto && (
          <>
            <label htmlFor="photo">Ajoutez une photo</label>
            <input type="file" onChange={onFileChange} />
            {file ? (''):(<div>Merci de choisir une image pour votre aquarium, vous pourrez la modifier plus tard </div>)}
            <div className="container-arrow">
              <span
                onClick={() => {
                  setDisplayType(true);
                  setDisplayPhoto(false);
                }}
              >
                Revenir en arrière
              </span>
             
              { file && <button className='btn' type="submit">Aller au dashboard</button>}
             
              

              
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default WelcomeModals;
