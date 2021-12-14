import React from "react";
import Navigation from "../components/Navigation";
import DashboardNavigation from "../dashboard/DashboardNavigation";

/**
 * @component
 * @param {component} childrenCards - display a card who needs in dashboard
 */

const DashboardDefault = ({ childrenCards }) => {
  return (
    <>
      <Navigation />
      <div className="container-dashboard-default">
        <div className="container-navigation-default">
          <DashboardNavigation />
        </div>
        <div className="container-main-default">{childrenCards}</div>
      </div>
    </>
  );
};

export default DashboardDefault;
