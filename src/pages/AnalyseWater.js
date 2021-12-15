import React from "react";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import FormsMeasure from "../components/measure/FormsMeasure";
import LastMeasureResults from "../components/measure/LastMeasureResults";
import LineBar from "../components/measure/LineBar";


const AnalyseWater = () => {
  return (
    <>
      <FormsMeasure />
       <LastMeasureResults />
      {/* <LineBar />  */}
    </>
  );
};

export default AnalyseWater;
