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

const SetupRegister = ({ openSetup, setOpenSetup,displaySetupSelected }) => {
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

    

  return (
    <div className="setup-register-container">
      {setupRegister &&
        setupRegister.map((setup) => {
          console.log(setup.id);
          return (
            <SetupCard
              key={setup.id}
              title={setup.timestamp.seconds}
              setup={setup}
              openSetup={openSetup} 
              setOpenSetup={setOpenSetup}
            />
          );
        })}
    </div>
  );
};

export default SetupRegister;
