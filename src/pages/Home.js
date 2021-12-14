import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";



import SignInModal from "../components/users/SignInModal";
import SignUpModal from "../components/users/SignUpModal";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   const equipementDB = firebase.database().ref("create-card-equipement");

  //   equipementDB.on("value", (snapshot) => {
  //     let previousEquipement = snapshot.val();
  //     console.log(previousEquipement);
  //     let equipements = [];
  //     // permet de créer des nouvelles carte equipements
  //     for (let id in previousEquipement) {
  //       equipements.push({ id, ...previousEquipement[id] });
  //       console.log(equipements);
  //     }

  //     if (equipements.length > 0) {
  //       const totalPrice = equipements.map((equipement) => equipement.price);
  //       let total = totalPrice.reduce((a, b) => a + b, 0);
  //       setTotalPrice(total);
  //     }
  //     console.log(equipements);
  //     setCardData(equipements);
  //   });
  // }, []);

  return (
    <>
      <div className="container-hero-dashboard">
        <HeroSection />
        <SignInModal/>
        <SignUpModal/>
      </div>
    </>
  );
};

export default Home;
