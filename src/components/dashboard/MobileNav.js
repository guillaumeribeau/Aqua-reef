import React, { useState, useEffect, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { UserContext } from "../../context/UserContext";

const MobileNav = () => {
const {mobile,setMobile}= useContext(UserContext)

  return (
    <>
      {mobile && (
        <div className="mobile-nav">
          <MenuIcon
            onClick={() => setMobile({...mobile, display:!mobile.display,menu:!mobile.menu})}
            sx={{
              position: "absolute",
              top: "30px",
              cursor: "pointer",
              color: "white",
              fontSize: "45px",
            }}
          />
        </div>
      )}
    </>
  );
};

export default MobileNav;
