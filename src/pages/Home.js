import HeroSection from "../components/layout/HeroSection";
import SignInModal from "../components/users/SignInModal";
import SignUpModal from "../components/users/SignUpModal";

const Home = () => {




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
