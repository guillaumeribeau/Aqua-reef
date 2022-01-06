import { Suspense } from "react";

import SignInModal from "../components/users/SignInModal";
import SignUpModal from "../components/users/SignUpModal";
import { Canvas } from "react-three-fiber";
import HeroSection from "../home/HeroSection";
const Home = () => {
  return (
    <>
      <div className="container-hero-dashboard">
        <HeroSection />
        <SignInModal />
        <SignUpModal />
      </div>
    </>
  );
};

export default Home;
