// import React, { useEffect, useState } from "react";
// import firebase from "firebase";
// import SetupCard from "../components/Setup/SetupCard";
// import EquipementCard from "../components/equipements/EquipementCard";
// import FormsSetupCard from "../components/Setup/FormsSetupCard";
// import Navigation from "../components/Navigation";
// import DashboardNavigation from "../dashboard/DashboardNavigation";
// /**
//  * display all card equipement register in one configuration (setup)
//  *  @components
//  */

// const SetupRegister = () => {
//   const [registerSetup, setRegisterSetup] = useState([]);
//   const [allCardRegisterSetup, setAllCardRegisterSetup] = useState([]);
//   const [modifySetup, setModifySetup] = useState(false);

//   useEffect(() => {
//     // firebase method for read information setup
//     const setupTankDB = firebase.database().ref("register-setup-tank");

//     setupTankDB.on("value", (snapshot) => {
//       let previousSetup = snapshot.val();

//       let setup = [];
//       for (let id in previousSetup) {
//         setup.push({ id, ...previousSetup[id] });
//       }

//       console.log(setup);
//       setRegisterSetup(setup);
//       console.log(registerSetup);
//     });

//     //permet de récupérer toutes les cartes dans un setup enregistrer
//     const setupRegisteForModify = firebase
//       .database()
//       .ref("all-card-setup-for-modify-by-user");
//     setupRegisteForModify.on("value", (snapshot) => {
//       let setupRegister = snapshot.val();
//       let setupCard = [];
//       if (setupRegister !== null) {
//         console.log(Object.keys(setupRegister));

//         Object.keys(setupRegister).forEach((key) =>
//           setupCard.push(setupRegister[key])
//         );
//         let setupRegisterCard = setupCard[0].data;

//         setupRegisterCard.forEach((card) => {
//           console.log(card);
//           setupCard.push(card);
//         });
//         setModifySetup(true);
//       }
//       console.log(setupCard);
//       setAllCardRegisterSetup(setupCard);

//       console.log(allCardRegisterSetup);
//     });
//   }, []);

//   const closeSetup = (e) => {
//     e.preventDefault();
//     let card = firebase.database().ref("all-card-setup-for-modify-by-user");
//     card.remove();
//   };

//   return (
//     <>
//       <span className="setup-section-title">Mes Setups sauvegardés</span>
//       <div className="container_all_register_setup">
//         {registerSetup.map((setup) => (
//           <SetupCard
//             name={setup.name}
//             price={setup.price}
//             description={setup.description}
//             key={setup.id}
//             remove={setup}
//             modify={setup}
//           />
//         ))}
//       </div>

//       <div className="container_equipement_card">
//         {allCardRegisterSetup.map((card) => (
//           <EquipementCard
//             key={card.id}
//             name={card.name}
//             category={card.category}
//             price={card.price}
//             picture={card.picture}
//             description={card.description}
//             removeCardInSetupRegister={card}
//             cardSize={250}
//             IconDelete={false}
//           />
//         ))}
//       </div>
//       {allCardRegisterSetup.length > 0 && (
//         <button className="btn-close-setup" onClick={closeSetup}>
//           Fermer le Setup
//         </button>
//       )}
//     </>
//   );
// };

// export default SetupRegister;
