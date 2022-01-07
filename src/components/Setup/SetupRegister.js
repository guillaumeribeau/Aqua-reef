import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebase/firebaseConfig";
import DisplaySetupOpen from "./DisplaySetupOpen";
import SetupCard from "./SetupCard";

const SetupRegister = ({ openSetup, setOpenSetup,setOneFilter,oneFilter}) => {
  const { currentUser } = useContext(UserContext);
  const [setupRegister, setsetupRegister] = useState([]);


  useEffect(() => {
    // select a collection
    const collectionRef = collection(db, "users", currentUser.uid, "setup");
    // filter method firebase
    const q = query(collectionRef, orderBy("timestamp", "desc"), limit(10));
    console.log(q);
    const unsub = onSnapshot(q, (snapshot) => {
      setsetupRegister(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setOpenSetup(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    
 

    });
    return unsub;
  }, []);


  const closeSetup = () => {
    setOneFilter([]);
  };
 
  return (
   <div className="setup-register-container">
    <div className="setup-register">
      {setupRegister &&
        setupRegister.map((setup) => {
         
          return (
            <SetupCard
              key={setup.id}
              title={setup.timestamp.seconds}
              setup={setup}
              openSetup={openSetup} 
              setOpenSetup={setOpenSetup}
              oneFilter={oneFilter}
              setOneFilter={setOneFilter}
            
             
            />
          );
        })}
        
    </div>   
    <div className="container-btn">
    {oneFilter.length === 1 && (
          <button className="btn-close-setup" onClick={closeSetup}>
            Fermer le setup
          </button>
        )}
   </div>
      </div>        
          
  );
};

export default SetupRegister;
