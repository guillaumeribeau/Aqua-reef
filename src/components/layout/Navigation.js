import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logotemporaire.png";
import UserMenu from "../users/UserMenu";

/**
 * header navigation
 * @components
 */

const Navigation = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo de aqua gest reef" />
      </div>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <UserMenu />
    </div>
  );
};

export default Navigation;
