// import React, { useEffect, useState } from "react";
// import SectionCreateEquipement from "../components/equipements/SectionCreateEquipement";
// import FormsSetupCard from "../components/Setup/FormsSetupCard";
// import firebase from "firebase";
// import SectionBudget from "../components/budget/SectionBudget";


// const CreateSetup = () => {
//   const [cardData, setCardData] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const equipementDB = firebase.database().ref("create-card-equipement");

//     equipementDB.on("value", (snapshot) => {
//       let previousEquipement = snapshot.val();
//       console.log(previousEquipement);
//       let equipements = [];
//       // permet de créer des nouvelles carte equipements
//       for (let id in previousEquipement) {
//         equipements.push({ id, ...previousEquipement[id] });
//         console.log(equipements);
//       }

//       if (equipements.length > 0) {
//         const totalPrice = equipements.map((equipement) => equipement.price);
//         let total = totalPrice.reduce((a, b) => a + b, 0);
//         setTotalPrice(total);
//       }
//       console.log(equipements);
//       setCardData(equipements);
//     });
//   }, []);

//   return (
//     <>
//       <SectionCreateEquipement />

//       <div className="section-budget-forms-setup">
//         <SectionBudget totalPrice={totalPrice} />
//         <FormsSetupCard
//           cardData={cardData}
//           totalPrice={totalPrice}
//           inputPlaceholder="Nom du Setup"
//           areaPlaceHolder="Description du setup"
//           textButton="Enregistrer mon Setup"
//         />
//       </div>
//     </>
//   );
// };

// export default CreateSetup;
