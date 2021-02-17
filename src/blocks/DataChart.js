import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";
import { useSelector } from "react-redux";
import { getAllHistorical } from "../selectors";
import { historicalToChartData, chartOptions } from "../utils";

export const DataChart = () => {
  const [chartType, setChartType] = useState("bar");

  const historicalData = useSelector(getAllHistorical);
  const chartData = historicalToChartData(historicalData.cases);

  let chartRef = useRef();

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        datasets: [
          {
            data: chartData,
            backgroundColor: "rgb(0, 147, 213)",
            label: "hello",
          },
        ],
      },
      options: chartOptions[chartType],
    });
  }, [chartData.length > 0]);

  return (
    <>
      <canvas id="chart" height="100px" width="400px" ref={chartRef}></canvas>
    </>
  );
};
