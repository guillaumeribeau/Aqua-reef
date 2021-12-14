import React, { useState } from "react";
import FormsBudget from "./FormsBudget";
import RadialBudget from "./RadialBudget";

/**
 * component display all section of User's Budget
 * @component
 * @param {number} totalPrice - total of all equipement card
 */

const SectionBudget = ({ totalPrice }) => {
  const [rangeBudget, setRangeBudget] = useState(0);

  /**
   * result percentage of total of all equipments and user 's Budget
   * @function
   * @returns {number(0..1)} - difference between total Card and Budget
   */
  const resultPercentageBugdet = () => {
    if (rangeBudget === 0) {
      let result = 0;
      return result;
    }
    const result = totalPrice / rangeBudget;
    return result;
  };
  const resultPercentage = resultPercentageBugdet();

  return (
    <div className="section-budget">
      <div className="container-budget">
        <FormsBudget
          rangeBudget={rangeBudget}
          setRangeBudget={setRangeBudget}
        />
        <RadialBudget dataRangeBudget={resultPercentage} />
      </div>
    </div>
  );
};

export default SectionBudget;
