import React, { useRef, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import { listOfPopulation } from "./DataPop";

const CardFish = ({name,latin,photo,alt,volume,longevity,description,addNewCardFish,setAddNewCardFish,card}) => {

const [displayText,setDisplayText]=useState(false)

const displayTextDescription = () => {
    setDisplayText(!displayText)
}

const addCardFishInMyAquarium = () => {
    const pictureList = listOfPopulation.filter(
        (cardPop) => card.id === cardPop.id
      );
      console.log(pictureList);
      setAddNewCardFish(pictureList);
}

  return (
    <>
      <div style={{height: displayText && 'auto'}} class="card-fish">
        <div class="title-fish">
          <h2>{name}</h2>
          <h2>({latin})</h2>
        </div>
        <img src={photo} alt={alt} />
        <div class="legend-fish">
          <h2>Volume: {volume}L</h2>
          <h2>Age: {longevity}</h2>
        </div>
        <div className="add-fish-container">
            <span>Ajouter à mon aquarium</span>
            <AddIcon onClick={addCardFishInMyAquarium}/>

        </div>
        <div className="title-description">
            <span>Lire la description</span>
           <AddCircleOutlineIcon onClick={displayTextDescription}/> 
        </div>
        
        {displayText ? (<p>{description}</p>):('')}
        
      </div>
    </>
  );
};

export default CardFish;
