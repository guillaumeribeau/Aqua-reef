import {
    collection,
    doc,
    getDoc,
    limit,
    onSnapshot,
    orderBy,
    query,
  } from "firebase/firestore";
  import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebase/firebaseConfig";
  

  
import { TableInstance } from "./TableInstance";

const FishTable = () => {
  const [data, setData] = useState([]);
  const {currentUser}=useContext(UserContext)
  // get data with firebase
  useEffect(() => {
    // select a collection
    const collectionRef = collection(
      db,
      "users",
      currentUser.uid,
      "MyPopulation"
    );
    // filter method firebase
    const q = query(collectionRef, orderBy("time", "desc"), limit(1000));
    console.log(q);
    const unsub = onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs);
      setData(
        snapshot.docs.map((doc) => ({
          ...doc.data().fishCard,
          id: doc.id,
        }))
      );
    });
    return unsub;
  }, []);

  return <TableInstance tableData={data} />;
};
export default FishTable;