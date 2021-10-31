import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barHeight = "0%";

  if (props.max > 0) {
    barHeight = Math.round((props.value / props.maxvalue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barHeight}}></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
};

export default ChartBar;
