import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const valueArr = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...valueArr); // Dùng dấu ... để lấy những giá trị trong value Arr add vào hàm max
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
