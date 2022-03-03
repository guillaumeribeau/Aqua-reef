import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import logo from "../../images/logotemporaire.png";
import MobileNav from "../dashboard/MobileNav";


import UserMenu from "../users/UserMenu";

/**
 * header navigation
 * @components
 */

const Navigation = () => {
  const { mobile, setMobile } = useContext(UserContext);

  
  return (
    <div className="header">
       {mobile.hamburger &&   <MobileNav mobile={mobile} setMobile={setMobile} />}
      <UserMenu />
    </div>
  );
};

export default Navigation;
