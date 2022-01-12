import React, { useEffect, useState } from "react";
import CardFish from "./CardFish";

import { v4 as uuidv4 } from "uuid";
import CreateNewCardFish from "./CreateNewCardFish";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Population = () => {
  
  const [newCardFish, setNewCardFish] = useState([]);
  const [addNewCardFish, setAddNewCardFish] = useState([]);

  const [rangeValue, setRangeValue] = useState(4);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["100L", "150L", "300L", "500L"];

  useEffect(() => {
    // select a collection
    const collectionRef = collection(db, "fish");
    // filter method firebase
    const q = query(collectionRef, orderBy("time", "desc"), limit(10));
    console.log(q);
    const unsub = onSnapshot(q, (snapshot) => {
      setNewCardFish(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

 
  return ( 
    <div className="container-card-fish">
       <CreateNewCardFish />
    
      <div className="sort-container">
        <input
          type="range"
          min="2"
          max={newCardFish.length}
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <ul>
          <span onClick={() => setRangeValue(rangeValue + 15)}>
            Afficher plus de Poissons
          </span>
          <span>Trier par: volume</span>
          {radios.map((radio) => {
            return (
              <li key={radio}>
                <input
                  type="radio"
                  value={radio}
                  id={radio}
                  checked={radio === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <label htmlFor={radio}>{radio}</label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="cancel">
        {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>
            Annuler les filtres
          </button>
        )}
      </div>
      {newCardFish
        .filter((card) => card.volume.includes(selectedRadio))
        .slice(0, rangeValue)
        .map((card) => {
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
              newCardFish={newCardFish}
              setNewCardFish={setNewCardFish}
              addNewCardfish={addNewCardFish}
              setAddNewCardFish={setAddNewCardFish}
            />
          );
        })}
    </div>
    
  );
};

export default Population;
