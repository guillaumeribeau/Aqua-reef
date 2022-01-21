import React from "react";
import PropTypes from "prop-types";

/**
 * component for customize radial Budget
 * @component
 * @param {number=0..1} value - value of percentage budget (0-2)
 * @param {number} viewBox - value of center text
 */

const CustomRadialBudget = (props) => {
  const { value, viewBox } = props;
  const { cx, cy } = viewBox;

  return (
    <React.Fragment>
      <text x={cx - 25} y={cy - 5}>
        <tspan
          style={{
            fontWeight: 700,
            fontSize: "36px",
            fill: "#FFF",
            fontFamily: "Roboto",
            marginBottom:'5px',
          }}
        >
          {`${(value * 100).toFixed(0)}%`}
        </tspan>
      </text>
      <text x={cx - 30} y={cy + 15}>
        <tspan
          style={{
            fontWeight: 500,
            fontSize: "16px",
            fill: "#FFF",
            fontFamily: "Roboto",
          }}
        >
          de votre
        </tspan>
      </text>
      <text x={cx - 30} y={cy + 35}>
        <tspan
          style={{
            fontWeight: 500,
            fontSize: "16px",
            fill: "#FFF",
            fontFamily: "Roboto",
          }}
        >
         Maximum
        </tspan>
      </text>
    </React.Fragment>
  );
};

export default CustomRadialBudget;

CustomRadialBudget.propTypes = {
  value: PropTypes.number.isRequired,
  viewBox: PropTypes.number.isRequired,
};
