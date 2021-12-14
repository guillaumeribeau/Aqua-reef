// import React, { useContext } from "react";
// import firebase from "firebase";


// // enregistre les Setup crée par le user
// export const pushRegisterSetupTank = (name, description, price, data) => {
//   const cardEquipementDB = firebase.database().ref("register-setup-tank");
//   const setupTank = {
//     name,
//     description,
//     price,
//     data,
//   };

//   cardEquipementDB.push(setupTank);
// };

// // créer la collection d'equipement
// export const pushcardEquipementInDb = (
//   name,
//   price,
//   category,
//   description,
//   picture
// ) => {
//   const cardEquipementDB = firebase.database().ref("create-card-equipement");

//   const equipement = {
//     category,
//     name,
//     price,
//     description,
//     picture,
//   };
//   cardEquipementDB.push(equipement);
// };

// // pour modifier ou afficher les setups sauvegardés
// export const pushAllCardRegisterSetupByUser = (data) => {
//   const cardEquipementDB = firebase
//     .database()
//     .ref("all-card-setup-for-modify-by-user");

//   const equipement = {
//     data,
//   };
//   cardEquipementDB.push(equipement);
// };

// // enregistre les nouvelles mesures de l'aquarium
// export const pushNewMeasure = (
//   date,
//   ph,
//   kh,
//   temperature,
//   density,
//   NH4,
//   NO3,
//   NO2,
//   Po,
//   Ca,
//   Mg,
//   uid
// ) => {
//   const newMeasure = firebase.database().ref("tank-measure");

//   const mesure = {
//     date,
//     ph,
//     kh,
//     temperature,
//     density,
//     NH4,
//     NO3,
//     NO2,
//     Po,
//     Ca,
//     Mg,
//     uid
//   };
//   newMeasure.push(mesure);
// };
