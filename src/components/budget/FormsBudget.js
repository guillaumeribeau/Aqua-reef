import React, { useState } from "react";

/**
 * forms for register user's Budget
 * @components
 * @param {number} rangeBudget - for capture a Range budget value
 * @param {number} setRangeBudget - modify a state of Range
 */
const FormsBudget = ({ rangeBudget, setRangeBudget }) => {
  /**
   * Submit a forms Budget
   * @function
   */
  const handleRangeBudget = (e) => {
    e.preventDefault();
    const rangeBudget = e.target.value;
    setRangeBudget(rangeBudget);
  };

  return (
    <div className="container-forms-budget">
      <label id="budget">Votre Budget Maximum ?</label>
      <input
        onChange={(e) => {
          setRangeBudget(e.target.value);
        }}
        type="range"
        min="0"
        max="15000"
        name="budget"
        id="budget"
        step="100"
      />

      <button type="submit" onClick={handleRangeBudget}>
        Valider
      </button>
      <span>{rangeBudget}Euros</span>
    </div>
  );
};

export default FormsBudget;
