import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { db } from '../../firebase/firebaseConfig';
import SetupCard from './SetupCard';


const SetupRegister = () => {

    const { currentUser } = useContext(UserContext);
    const [lastMeasure, setLastMeasure] = useState([]);
  
    useEffect(() => {
      // select a collection
      const collectionRef = collection(db, "users", currentUser.uid, "setup");
      // filter method firebase
      const q = query(collectionRef, orderBy("timestamp", "desc"), limit(10));
      console.log(q);
      const unsub = onSnapshot(q, (snapshot) =>
        setLastMeasure(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      );
  console.log(lastMeasure);
      return unsub;
    }, []);



    return (
        <div>
         {lastMeasure && (
             lastMeasure.map((setup)=>{
return(<SetupCard title={setup.timestamp.seconds}/>)


             })
       




         )
         
         }
        </div>
    );
};

export default SetupRegister;