import React from "react";
import FormsMeasure from "../components/measure/FormsMeasure";
import LastMeasureResults from "../components/measure/LastMeasureResults";
import LineBar from "../components/measure/LineBar";


const AnalyseWater = () => {
  return (
    <div className="analyse-water-container">
      <FormsMeasure />
       <LastMeasureResults />
      <LineBar /> 
    </div>
  );
};

export default AnalyseWater;
