import React, { useEffect, useState } from "react";
import CardFish from "./CardFish";
import { listOfPopulation } from "./DataPop";
import { v4 as uuidv4 } from "uuid";

const Population = () => {
  const [cardFish, setCardFish] = useState(listOfPopulation);
  
  const [addNewCardFish, setAddNewCardFish] = useState([]);

  const [rangeValue, setRangeValue] = useState(4);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["100L", "150L", "300L", "500L",];
  


  console.log(cardFish);
  return (
    <div className="container-card-fish">
     
      <div className="sort-container">
        <input
          type="range"
          min="2"
          max={cardFish.length}
          value={rangeValue}
          onChange={(e)=>(setRangeValue(e.target.value))}
          />
        <ul>
          <span onClick={()=>setRangeValue(rangeValue+15)}>Afficher plus de Poissons</span>
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
          <button onClick={() => setSelectedRadio("")}>Annuler les filtres</button>
        )}
      </div>
      {cardFish
        .filter((card) => card.volume.includes(selectedRadio))
        .slice(0,rangeValue)
        .map((card) => {
          return (
            <CardFish
              card={card}
              key={card.id}
              id={card.id}
              name={card.name}
              latin={card.latin}
              photo={card.photo}
              alt={card.alt}
              longevity={card.longevity}
              volume={card.volume}
              description={card.description}
              cardfish={cardFish}
              setCardFish={setCardFish}
              addNewCardfish={addNewCardFish}
              setAddNewCardFish={setAddNewCardFish}
             
            />
          );
        })}
    </div>
  );
};

export default Population;
