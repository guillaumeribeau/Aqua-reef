import React, { useState, useEffect, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { UserContext } from "../../context/UserContext";

const MobileNav = () => {
  const { mobile, setMobile } = useContext(UserContext);

  return (
    <>
      {mobile && (
        <MenuIcon
          onClick={() => setMobile({ ...mobile, display: !mobile.display })}
          sx={{
           marginLeft:'3%',
            cursor: "pointer",
            color: "white",
            fontSize: "45px",
            zIndex:'25',
          }}
        />
      )}
    </>
  );
};

export default MobileNav;
