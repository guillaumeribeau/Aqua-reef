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
      <nav className="nav-header">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <UserMenu />
    </div>
  );
};

export default Navigation;
