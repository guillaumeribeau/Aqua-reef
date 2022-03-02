import Navigation from "../components/layout/Navigation";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import MobileNav from "../components/dashboard/MobileNav";
/**
 * @component
 * @param {component} childrenCards - display a card who needs in dashboard
 */

const DashboardDefault = ({ childrenCards }) => {
  const [navMobile, setNavMobile] = useState(true);

  // useEffect(() => {
  //   if (window.innerWidth < 1000) {
  //     console.log("1000px ok ");
  //     setNavMobile(!navMobile);
  //   }
  // }, []);

  return (
    <>
      <Navigation />
      <div className="container-dashboard-default">
        <MobileNav />
        <DashboardNavigation />

        <div className="container-main-default">{childrenCards}</div>
      </div>
    </>
  );
};

export default DashboardDefault;
