import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CardFish from "../allCardFish/CardFish";
import { UserContext } from "../context/UserContext";
import { db } from "../firebase/firebaseConfig";

const MyPopulation = () => {
  const { currentUser } = useContext(UserContext);
  const [population, setPopulation] = useState([]);
  const [totalSizeFish, setTotalSizeFish] = useState([]);

  const volumeAqua = 10

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
          ...doc.data().addCardInAquarium,
          id: doc.id,
        }))
      );
    });
    return unsub;
  }, []);
  console.log(population);

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

  return (
   <div className="population">

    <div className="container-infos-aqua">
        <div>Votre aquarium fait {volumeAqua}</div>

{totalSizeFish > volumeAqua && (

<div>VOUS AVEZ DEPASSER LA POPULATION !!</div>

)}

    </div>
      <div className="container-card-fish">
        {population.map((card) => {
          return (
            <CardFish
              card={card}
              key={card.id}
              id={card.id}
              name={card.name}
              latin={card.latin}
              photo={card.url}
              alt={card.alt}
              longevity={card.longevity}
              volume={card.volume}
              description={card.description}
              addFishText={false}
              size={card.size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPopulation;
