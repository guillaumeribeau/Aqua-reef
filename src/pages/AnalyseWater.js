import React from "react";
import DashboardNavigation from "../dashboard/DashboardNavigation";
import FormsMeasure from "../measure/FormsMeasure";
import LastMeasureResults from "../measure/LastMeasureResults";
import LineBar from "../measure/LineBar";


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
