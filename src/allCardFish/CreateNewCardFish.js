import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState, useRef } from "react";
import Addphoto from "../components/dashboard/Addphoto";
import { db, storage } from "../firebase/firebaseConfig";

const CreateNewCardFish = ({setDisplayForms}) => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [latin, setLatin] = useState("");
  const [description, setDesciption] = useState("");
 
 

  const volume = useRef();
  const longevity = useRef();
  const size = useRef();
  
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
      addDoc(collection(db, "fish"), {
        url,
        time: serverTimestamp(),
        name,
        latin,
        description,
        volume: volume.current.value,
        longevity: longevity.current.value,
        alt:name,
        size: size.current.value
      });
    });
e.target.reset()
  };

  const closeModals = () => {
    setDisplayForms(false)
    
  }

  return (
    <div  onClick={closeModals} className="fixed-container-modals">
      <div className="container-modals"></div>
    <form  onSubmit={handleSubmitnewFish} className="create-card-fish-container">
      <label htmlFor="name">Nom Communs</label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="name"
        placeholder=""
      />
      <label htmlFor="latin">Nom Latin</label>
      <input
        onChange={(e) => setLatin(e.target.value)}
        type="text"
        id="latin"
        placeholder=""
      />
      <label for="description">Description</label>
      <textarea
        onChange={(e) => setDesciption(e.target.value)}
        type="text"
        id="description"
        placeholder=""
      ></textarea>
      <label for="volume">Volume</label>
      <input ref={volume} type="text" id="volume" placeholder="" />
      <label for="size">Taille en cm</label>
      <input ref={size} type="number" id="volume" placeholder="" />
      <label htmlFor="duree">Durée de vie</label>
      <input ref={longevity} type="text" id="duree" placeholder="" />
      <label htmlFor="photo">Ajoutez une photo</label>
      <input type="file" onChange={onFileChange} />

      <button type="submit">Enregistrer</button>
    </form>
    </div>

  );
};

export default CreateNewCardFish;
