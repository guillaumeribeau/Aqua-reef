import Navigation from "../components/layout/Navigation";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import MobileNav from "../components/dashboard/MobileNav";
import { UserContext } from "../context/UserContext";
/**
 * @component
 * @param {component} childrenCards - display a card who needs in dashboard
 */

const DashboardDefault = ({ childrenCards }) => {
const {mobile,setMobile}=useContext(UserContext)

  return (
    <>
      <Navigation />
      <div className="container-dashboard-default">
        {mobile.hamburger &&   <MobileNav />}
      
        <DashboardNavigation />

        <div className="container-main-default">{childrenCards}</div>
      </div>
    </>
  );
};

export default DashboardDefault;
