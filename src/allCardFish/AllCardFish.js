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
import ScrollBtn from "../components/loader/ScollBtn";

const AllCardFish = () => {
  const [newCardFish, setNewCardFish] = useState([]);
  const [displayForms, setDisplayForms] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  

  const [rangeValue, setRangeValue] = useState(6);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["100L", "150L", "300L", "500L"];
 
  
  useEffect(() => {
    // select a collection
    const collectionRef = collection(db, "fish");
    // filter method firebase
    const q = query(collectionRef, orderBy("time", "desc"), limit(1000));
    console.log(q);
    const unsub = onSnapshot(q, (snapshot) => {
      setNewCardFish(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

 

const loadMore = () => {
  setRangeValue(rangeValue + 3);
}
const searchByInput = (e) => {
  setSearchInput(e.target.value.toLowerCase())
  if (searchInput) {
    setSelectedRadio(true)

  }
}


  return (
      <>
    <div className="container-card-fish">
      <button onClick={()=>setDisplayForms(true)}>Créer une nouvelle fiche</button>
      {displayForms && <CreateNewCardFish setDisplayForms={setDisplayForms} />}

      <div className="sort-container">
        <input
          type="range"
          min="4"
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
      <div className="search-card-fish">
<label htmlFor="search">Recherche fiches poissons</label>
<input onChange={searchByInput} type="text" name="search" id="search" />
</div>
      <div className="cancel">
        {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>
            Annuler les filtres
          </button>
        )}
      </div>
      {newCardFish
        .filter((card) => card.volume.includes(selectedRadio) && card.name.toLowerCase().includes(searchInput) || card.latin.toLowerCase().includes(searchInput))
      .slice(0, rangeValue)
        .map((card) => {
          return (
            <CardFish
              card={card}
              key={card.id}
              id={card.id}
              size={card.size}
              name={card.name}
              latin={card.latin}
              photo={card.url}
              alt={card.alt}
              longevity={card.longevity}
              volume={card.volume}
              description={card.description}
              newCardFish={newCardFish}
              setNewCardFish={setNewCardFish}
              addFishButtonProps={true}
           
             
            />
          );
        })}
      


  {newCardFish.length <= rangeValue ? (
    <button style={{position:'absolute', bottom:'-80px'}} onClick={loadMore}>plus de poissons à venir</button>
    ):(
      
      <button style={{position:'absolute', bottom:'-80px'}} onClick={loadMore}>charger plus</button> 
   

  )}
    </div>
    
   </>
  );
};

export default AllCardFish;
