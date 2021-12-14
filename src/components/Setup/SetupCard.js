// import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import firebase from "firebase";
// import { pushAllCardRegisterSetupByUser } from "../firebase/FunctionFirebase";

// /**
//  * @components
//  * @param {string} name - name of setup
//  * @param {number} price - price of all equipements
//  * @param {string} description - description of setup
//  * @param {function} remove- remove a setup
//  * @param {function} modify- For now it is only for displau all card of setup
//  */


// export default function SetupCard({
//   name,
//   price,
//   description,
//   remove,
//   modify,
// }) {
//   const deleteSetup = () => {
//     let card = firebase.database().ref("register-setup-tank").child(remove.id);
//     card.remove();
//   };

//   const modifySetup = () => {
//     const setupTankDB = firebase
//       .database()
//       .ref("register-setup-tank")
//       .child(modify.id);

//     setupTankDB.on("value", (snapshot) => {
//       let setupRegister = snapshot.val();
//       console.log(setupRegister.data);
//       pushAllCardRegisterSetupByUser(setupRegister.data);
//     });
//   };

//   return (
//     <Card sx={{ maxWidth: 200, marginBottom: 5, marginRight: 10 }}>
//       <CardMedia
//         component="img"
//         height="150"
//         image="../images/setup.jpg"
//         alt="setup"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="subtitle1" component="div">
//           {name}
//         </Typography>
//         <Typography gutterBottom variant="subtitle2" component="div">
//           {price} Euros
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button onClick={modifySetup} size="small">
//           Visualiser
//         </Button>
//         <Button onClick={deleteSetup} size="small">
//           Supprimer
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
