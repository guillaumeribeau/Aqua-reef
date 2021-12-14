// import React, { useEffect, useState } from "react";
// import EquipementCard from "./EquipementCard";
// import FormsEquipementCard from "./FormsEquipementCard";


// /**
//  * display all section of equipment
//  * @components
//  * 
//  */


// const SectionCreateEquipement = () => {
//   // const [cardData, setCardData] = useState([]); // card du forms
//   // const [totalPrice, setTotalPrice] = useState(0);

//   // useEffect(() => {
//   //   const equipementDB = firebase.database().ref("create-card-equipement");

//   //   equipementDB.on("value", (snapshot) => {
//   //     let previousEquipement = snapshot.val();
//   //     console.log(previousEquipement);
//   //     let equipements = [];
//   //     // permet de créer des nouvelles carte equipements
//   //     for (let id in previousEquipement) {
//   //       equipements.push({ id, ...previousEquipement[id] });
//   //       console.log(equipements);
//   //     }
//   //     // display total price of all card equipment
//   //     if (equipements.length > 0) {
//   //       const totalPrice = equipements.map((equipement) => equipement.price);
//   //       let total = totalPrice.reduce((a, b) => a + b, 0);
//   //       setTotalPrice(total);
//   //     }
//   //     console.log(equipements);
//   //     setCardData(equipements);
//   //   });
//   // }, []);

//   return (
//     <>
//       <div className="section-card-equipement">
//         <FormsEquipementCard />

//         {cardData.length === 0 ? (
//           <div className="container-demo-card">
//             <div className="demo-card">Ajouter un équipement</div>
//             <div className="demo-card">Ajouter un équipement</div>
//             <div className="demo-card">Ajouter un équipement</div>
//           </div>
//         ) : (
//           <div className="container_equipement_card">
//             {cardData.map((card) => (
//               <EquipementCard
//                 key={card.id}
//                 name={card.name}
//                 category={card.category}
//                 price={card.price}
//                 picture={card.picture}
//                 description={card.description}
//                 removeCard={card}
//                 cardSize={250}
//                 IconDelete={true}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SectionCreateEquipement;
