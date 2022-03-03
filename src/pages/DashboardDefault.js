import Navigation from "../components/layout/Navigation";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import React, { useContext, useEffect, useRef, useState } from "react";

/**
 * @component
 * @param {component} childrenCards - display a card who needs in dashboard
 */

const DashboardDefault = ({ childrenCards }) => {
  

  return (
    <>
      <Navigation />
      <div className="dashboard">
        <DashboardNavigation />

        <div className="dashboard-main">{childrenCards}</div>
      </div>
    </>
  );
};

export default DashboardDefault;
