import React, { useEffect } from "react";
import C from "chart.js";
import { ChartData } from "../types";
import { chartOptions, commify } from "../utils";

interface ChartProps {
  type: string;
  label: any[];
  data: ChartData[];
  id: string;
  value?: number;
}

const colors: Record<string, string> = {
  "Confirmed cases": "rgb(0, 147, 213)",
  Deaths: "rgb(236, 0, 0)",
  Recovered: "green",
};

export const Chart: React.FC<ChartProps> = ({ type, label, data, id }) => {
  useEffect(() => {
    const mychart = new C(id, {
      type,
      data: {
        datasets: [
          {
            data,
            backgroundColor: colors[label[1]],
            hoverBackgroundColor: "rgb(2, 20, 34)",
            borderColor: "rgba(32, 33, 36, 0.5)",
            pointRadius: 0,
          },
        ],
      },
      options: chartOptions[type],
    });

    return () => {
      mychart.destroy();
    };
  }, [type, data, id, label]);

  return (
    <div className="chart">
      <p style={{ color: `${colors[label[1]]}` }}>
        <span>{commify(label[0])}</span> <br />
        <span>{label[1]}</span>
      </p>
      <div className="chart__container">
        <canvas aria-label={`${label[1]} chart`} id={id}></canvas>
      </div>
    </div>
  );
};
