import { Suspense } from "react";
import Clown from "../animation3d/Clown";
import HeroSection from "../components/layout/HeroSection";
import SignInModal from "../components/users/SignInModal";
import SignUpModal from "../components/users/SignUpModal";
import { Canvas } from "react-three-fiber";
const Home = () => {




  return (
    <>
      <div className="container-hero-dashboard">
        <HeroSection />
        <SignInModal/>
        <SignUpModal/>
        {/* <div className='container-3d-clown'>
        <Clown/>
        </div> */}
      </div>
    </>
  );
};

export default Home;
