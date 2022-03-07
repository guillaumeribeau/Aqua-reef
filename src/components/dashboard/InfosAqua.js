import React, { useContext, useEffect, useState } from 'react';
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
  } from "firebase/firestore";
  import { db } from "../../firebase/firebaseConfig";
import { UserContext } from '../../context/UserContext';
const InfosAqua = ({bgcolor}) => {
    const [infosAqua, setInfosAqua] = useState([]);
    const [bg, setBg] = useState(bgcolor);
    const { currentUser } = useContext(UserContext);


    useEffect(() => {
        //method firebase
        const unsub = onSnapshot(
          doc(db, "users", currentUser.uid, "aquarium", "infos-aqua"),
          (doc) => {
       
            setInfosAqua(doc.data());
          }
        );
    
        return unsub;
      }, []);

    return (
        <div className={bg ? ("legend-header-dashboard bg-color"):("legend-header-dashboard ")}>
           {bg ? (<h2>Mon aquarium</h2>):(<h4>Mon aquarium</h4>)} 
            <span className="title-aqua">{infosAqua && infosAqua.name}</span>
            <span className="title-aqua">{infosAqua && infosAqua.volume}L</span>
            <span className="title-aqua">
              {infosAqua && infosAqua.selectedRadio}
            </span>
          </div>
    );
};

export default InfosAqua;