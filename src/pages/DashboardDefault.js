import Navigation from "../components/layout/Navigation";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";

/**
 * @component
 * @param {component} childrenCards - display a card who needs in dashboard
 */

const DashboardDefault = ({ childrenCards }) => {
  const {mobile,theme}= useContext(UserContext)

  return (
    <>
      <Navigation />
      <div className="dashboard">
        <DashboardNavigation />
{theme === 'dark' ? ( <div className={mobile.display ? "dashboard-main-no-scroll":"dashboard-main dark"}>{childrenCards}</div>
      ):(<div className={mobile.display ? "dashboard-main-no-scroll":"dashboard-main"}>{childrenCards}</div>
      )}
       </div>
    </>
  );
};

export default DashboardDefault;
