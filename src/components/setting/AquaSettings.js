import React, { useContext, useEffect, useRef, useState } from "react";
import Navigation from "../layout/Navigation";
import {
  collection,
  doc,
  DocumentSnapshot,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { UserContext } from "../../context/UserContext";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import Addphoto from "../dashboard/Addphoto";

const AquaSettings = () => {
  const [file, setFile] = useState("");

  const [volume, setVolume] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["recifal", "mixte", "fish-only"];

  const [infosAqua, setInfosAqua] = useState([]);
  const { currentUser } = useContext(UserContext);
  const [edit, setEdit] = useState({
    name: false,
    volume: false,
    selectedRadio: false,
    file: false,
  });

  const nameRef = useRef();
  const volumeRef = useRef();

  // select a collection
  // get all infos User's Aquarium

  useEffect(() => {
    //method firebase
    const unsub = onSnapshot(
      doc(db, "users", currentUser.uid, "aquarium", "infos-aqua"),
      (doc) => {
        console.log("Current data: ", doc.data());
        setInfosAqua(doc.data());
      }
    );

    return unsub;
  }, []);

  console.log(infosAqua);
  const refAquaInfos = doc(
    db,
    "users",
    currentUser.uid,
    "aquarium",
    "infos-aqua"
  );
  const updateName= async()=>{

    
      await updateDoc(refAquaInfos, {
        name: nameRef.current.value,
      }); 
      setEdit({ ...edit, name: false });
  }
  const updateVolume= async()=>{

    
    await updateDoc(refAquaInfos, {
      volume: volumeRef.current.value,
    }); 
    setEdit({ ...edit, volume: false });
}
const updateType= async()=>{

    
  await updateDoc(refAquaInfos, {
    type: selectedRadio,
  }); 
  setEdit({ ...edit, selectedRadio: false });
}

  return (
    <>
      <Navigation />
      <div className="title-edit-aqua">
        <h2>Modification général de mon aquarium</h2>
      </div>
      <div className="container-infos-aqua-edit">
        {edit.name ? (
          <div>
          <h3>Nom de votre aquarium</h3>
          <div className="container-edit-aqua">
            <input type="text" ref={nameRef} defaultValue={infosAqua.name} />
            <CheckIcon
              onClick={updateName}
              sx={{ cursor: "pointer" }}
            />
          </div>
          </div>
        ) : (
          <>
            <h3>Nom de votre aquarium</h3>
            <div className="container-edit-aqua">
            <h3>{infosAqua.name}</h3>

            <button
              onClick={() => setEdit({ ...edit, name: true })}
            
            >Modifier</button>
            </div>
          </>
        )}

        {edit.volume ? (
       <div>
       <h3>Volume de votre aquarium</h3>
       <div className="container-edit-aqua">
            <input
              type="text"
              ref={volumeRef}
              defaultValue={infosAqua.Volume}
            />
            <CheckIcon
              onClick={updateVolume}
              sx={{ cursor: "pointer" }}
            />
          </div>
          </div>
        ) : (
          <>
            <h3>Volume de votre aquarium</h3>
            <div className="container-edit-aqua">
            <h3>{infosAqua.volume}</h3>

            <button
              onClick={() => setEdit({ ...edit, volume: true })}
              
            >Modifier</button>
            </div>
          </>
        )}
        <div className="container-type-edit">
   <div><h3>Votre type d'aquarium est <span>{infosAqua.type}</span></h3></div>
        <label for="type">Changer le type </label>
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
        <button onClick={updateType}>valider changement type</button>
        </div> 
        <img src={infosAqua.url} alt="logo de aqua gest reef" />
        <div className="container-photo-edit" >
       
         <Addphoto StorageUrl={`${currentUser.uid}/images/aquarium`} RegisterUrlInFireStore={`users/${currentUser.uid}/aquarium/infos-aqua`}/> 
         </div>
      </div>
    </>
  );
};

export default AquaSettings;

{
  
}
