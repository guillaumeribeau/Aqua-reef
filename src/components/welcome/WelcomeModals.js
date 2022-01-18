import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState, useRef } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { db, storage } from "../../firebase/firebaseConfig";



const WelcomeModals = ({setDiplayWelcomeModals}) => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["recifal","mixte","fish-only"];
  const volume = useRef();

  const { currentUser } = useContext(UserContext);
const navigate=useNavigate()
  const onFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleSubmitnewFish = async (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `/images/fishCardImages/${file.name}`);
    console.log(storageRef);
    await uploadBytes(storageRef, file);
    // permet de stocker url dans firestore
    await getDownloadURL(storageRef).then((url) => {
      addDoc(collection(db, "users", currentUser.uid, "infos-aqua"), {
        url,
        time: serverTimestamp(),
        name,
        volume: volume.current.value,
      });
    });
    e.target.reset();
  };

  const closeModals = () => {
 setDiplayWelcomeModals(false)
  };

  return (
    <div  className="fixed-container-modals">
      <div onClick={closeModals} className="container-modals"></div>

      <form
        onSubmit={handleSubmitnewFish}
        className="welcome-form"
      >
          <div> Bienvenue sur Aqua Reef, si vous avez déjà les informations sur votre aquarium, vous pouvez
    remplir ce petit formulaire sinon clickez sur passer cette étape
     </div>
      <button onClick={()=>navigate('/private/dashboard')}>Passer cette étape </button>
        <label htmlFor="name">Donnez un nom à votre Aquarium</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder=""
        />

        <label for="volume">Quel est le voulume de votre Aquarium ? </label>
        <input ref={volume} type="text" id="volume" placeholder="" />

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

        <label htmlFor="photo">Ajoutez une photo</label>
        <input type="file" onChange={onFileChange} />

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default WelcomeModals;
