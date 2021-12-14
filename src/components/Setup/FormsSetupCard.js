// import React, { useState } from "react";
// import firebase from "firebase";
// import { pushRegisterSetupTank } from "../firebase/FunctionFirebase";

// /**
//  * display a forms for register all equipment card
//  * @components
//  * @param {number} totalPrice - register total price of all equipment card
//  * @param {object} cardData - register all information of equipment card
//  * @param {string} inputPlaceholder - display a text in input
//  * @param {string} areaPlaceholder - display a text in area
//  * @param {string} textButton - display a text in button
//  */

// const FormsSetupCard = ({
//   totalPrice,
//   cardData,
//   inputPlaceholder,
//   areaPlaceHolder,
//   textButton,
// }) => {
//   const [nameSetup, setNameSetup] = useState("");
//   const [descriptionSetup, setDecriptionSetup] = useState("");

//   const registerMySetupTank = (e) => {
//     e.preventDefault();

//     // enregistre le setup dans une nouvelle data collection
//     pushRegisterSetupTank(nameSetup, descriptionSetup, totalPrice, cardData);
//     deleteAllCard();
//   };

//   const deleteAllCard = () => {
//     let allCard = firebase.database().ref("create-card-equipement");
//     allCard.remove();
//   };

//   return (
//     <>
//       <div className="container_register_setup_forms">
//         <div className="register_setup_forms">
//           <input
//             type="text"
//             placeholder={inputPlaceholder}
//             onChange={(e) => setNameSetup(e.target.value)}
//           />
//           <textarea
//             onChange={(e) => setDecriptionSetup(e.target.value)}
//             placeholder={areaPlaceHolder}
//           ></textarea>
//           <div className="forms-totalPrice">
//             {" "}
//             Votre setup coûte <span>{totalPrice}</span> Euros
//           </div>
//           <button onClick={registerMySetupTank}>{textButton}</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FormsSetupCard;
