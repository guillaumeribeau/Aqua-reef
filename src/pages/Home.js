import React, { useEffect, useState } from "react";
import HeroSection from "../components/layout/HeroSection";



import SignInModal from "../components/users/SignInModal";
import SignUpModal from "../components/users/SignUpModal";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);



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
