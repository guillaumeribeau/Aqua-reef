import React, { useState } from "react";
import FormsMeasure from "../components/measure/FormsMeasure";
import LastMeasureResults from "../components/measure/LastMeasureResults";
import LineBar from "../components/measure/LineBar";


const AnalyseWater = () => {


  return (
    <>
      <FormsMeasure />
       <LastMeasureResults bgcolor={true}/>
      <LineBar /> 
    </>
  );
};

export default AnalyseWater;
