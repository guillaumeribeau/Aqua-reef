import React from "react";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import CustomRadialBudget from "./CustomRadialBudget";

/**
 * component display radial budget percentage
 * @component
 * @param {number(0..1)} dataRangeBudget - value of percentage
 */

const RadialBudget = ({ dataRangeBudget }) => {
  const data = [{ value: dataRangeBudget }, { value: 1 - dataRangeBudget }];

  return (
    <div className="radar_score_container">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart width={250} height={180}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={180}
            endAngle={-360}
          >
            {data.map((entry, index) => {
              if (index === 1) {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill="#b3ffab"
                    stroke-linecap="round"
                  />
                );
              }
              return <Cell key={`cell-${index}`} fill="#12fff7" />;
            })}
            <Label
              content={<CustomRadialBudget value={data[0] && data[0].value} />}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialBudget;

RadialBudget.prototype = {
  dataRangeBudget: PropTypes.number.isRequired,
};
