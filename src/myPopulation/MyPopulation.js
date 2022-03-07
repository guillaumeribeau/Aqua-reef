import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CardFish from "../allCardFish/CardFish";
import RadialGraph from "../components/graphique/RadialGraph";
import { UserContext } from "../context/UserContext";
import { db } from "../firebase/firebaseConfig";
import FishTable from "./table/FishTable";

const MyPopulation = () => {
  const { currentUser } = useContext(UserContext);
  const [population, setPopulation] = useState([]);
  const [totalSizeFish, setTotalSizeFish] = useState([]);
  const [volumeAqua, setVolumeAqua] = useState(0);

  const [oneCardDisplay, setOneCardDisplay] = useState([]);

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
      setPopulation(
        snapshot.docs.map((doc) => ({
          ...doc.data().fishCard,
          id: doc.id,
        }))
      );
    });
    return unsub;
  }, []);

  useEffect(() => {
    const refAquaInfos = doc(
      db,
      "users",
      currentUser.uid,
      "aquarium",
      "infos-aqua"
    );
    const unsub = onSnapshot(
      doc(db, "users", currentUser.uid, "aquarium", "infos-aqua"),
      (doc) => {
        setVolumeAqua(doc.data().volume);
      }
    );

    return unsub;
  });

  // get data with firebase

  useEffect(() => {
    getAllSizeOfFish();
  }, [population]);

  // recupères le total des tailles des poissons de l'aqua
  const getAllSizeOfFish = () => {
    const totalSize = population.map((c) => parseInt(c.size));
    const total = totalSize.reduce((a, b) => a + b, 0);
    console.log(total);
    setTotalSizeFish(total);
  };

  const resultPercentageBugdet = () => {
    if (totalSizeFish === 0) {
      let result = 0;
      return result;
    }
    const result = totalSizeFish / volumeAqua;
    return result;
  };
  const resultPercentage = resultPercentageBugdet();

  // delete row fish in tableFish
  const removeRowFish = (id) => {
    deleteDoc(doc(db, "users", currentUser.uid, "MyPopulation", id));
  };

  const displayCardFishDetails = (id) => {
    const cardFishFiltered = population.filter((card) => id === card.id);
    setOneCardDisplay({ ...oneCardDisplay, cardFishFiltered });
  };

  

  return (
    <div className="population">
      <div className="container-infos-aqua">
        <RadialGraph dataRangeBudget={resultPercentage} />
        {totalSizeFish > volumeAqua && (
          <div>VOUS AVEZ DEPASSER LA POPULATION !!</div>
        )}
      </div>

      <FishTable
        tableData={population}
        removeRowFish={removeRowFish}
        displayCardFishDetails={displayCardFishDetails}
      />
    </div>
  );
};

export default MyPopulation;
