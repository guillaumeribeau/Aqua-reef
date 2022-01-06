import React, { useState } from "react";
import CardFish from "./CardFish";
import { listOfPopulation } from "./DataPop";
import { v4 as uuidv4 } from 'uuid';

const Population = () => {
const [cardFish, setCardFish]= useState(listOfPopulation)
const [addNewCardFish, setAddNewCardFish]= useState([])

// const addCardFishInMyAquarium = (id) => {
//     const pictureList = cardFish.filter(
//         (cardPop) => card.id === cardPop.id
//       );
//       console.log(pictureList);
//       setAddNewCardFish(pictureList);
// }
console.log(addNewCardFish);

  return (
    <div className="container-card-fish">
      {cardFish.map((card) => {
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
            //addCardFishInMyAquarium={addCardFishInMyAquarium}
          />
        );
      })}
    </div>
  );
};

export default Population;
