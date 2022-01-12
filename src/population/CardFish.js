import React, { useRef, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";


const CardFish = ({
  name,
  latin,
  photo,
  alt,
  volume,
  longevity,
  description,
  addNewCardFish,
  setAddNewCardFish,
  card,
}) => {
  const [clickAdd,setClickAdd] = useState(false);

  // const addCardFishInMyAquarium = () => {
  //   const pictureList = listOfPopulation.filter(
  //     (cardPop) => card.id === cardPop.id
  //   );
  //   console.log(pictureList);
  //   setAddNewCardFish(pictureList);
  //      setClickAdd(true)
  //   setTimeout(()=>{
  //    setClickAdd(false)
  //   },2000)
 
  // };

  return (
    <>
      <div className="card-wrapper-fish">
      {clickAdd ? (<div className="message-add-fish-ok">Poisson ajouter à votre aquarium</div>):(
 <div className="add-fish-container">
          <span>Ajouter ce poisson</span>
        
          <AddIcon
            sx={{
              fontSize: "40px",
              marginRight: "5px",
              cursor: "pointer",
              "&:hover": {
                color: "blue",
                fontSize: "45px",
              },
            }}
           
          />
        </div> 

      )}
        
        
        <div className="card">
          <div className="card-fish-front">
            <div className="title-fish">
              <h2>{name}</h2>
              <h2>({latin})</h2>
            </div>
            <img src={photo} alt={alt} />
            <div className="legend-fish">
              <h2>Volume: {volume}</h2>
              <h2>Age: {longevity}</h2>
            </div>
          </div>
          <div className="card-fish-back">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFish;
