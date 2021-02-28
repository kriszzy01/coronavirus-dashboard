import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getTotal, historicalData } from "../utils";
import { Chart } from "../components/Chart";

import {
  getWorldHistory,
  getCountryHistory,
  getWorldwide,
  getTargetData,
  getCountry,
} from "../selectors";

export const DataChart: React.FC = () => {
  const [chartType, setChartType] = useState("bar");

  const worldHistory = useSelector(getWorldHistory);
  const countryHistory = useSelector(getCountryHistory);
  const targetCountry = useSelector(getTargetData);
  const world = useSelector(getWorldwide);
  const country = useSelector(getCountry);

  const { cases, deaths, recovered } = getTotal(country, world, targetCountry);

  const deathHistory = historicalData(
    targetCountry,
    worldHistory.deaths,
    countryHistory[targetCountry]?.deaths
  );
  const casesHistory = historicalData(
    targetCountry,
    worldHistory.deaths,
    countryHistory[targetCountry]?.cases
  );

  const recoveredHistory = historicalData(
    targetCountry,
    worldHistory.deaths,
    countryHistory[targetCountry]?.recovered
  );

  return (
    <div className="datachart">
      <div className="datachart__header">
        <h3>
          {targetCountry === "Global"
            ? "Global Situation"
            : `Situation in ${targetCountry}`}
        </h3>

        <div>
          <button
            type="button"
            onClick={() => setChartType("bar")}
            data-active={chartType === "bar"}
          >
            Bar
          </button>

          <button
            type="button"
            onClick={() => setChartType("line")}
            data-active={chartType === "line"}
          >
            Line
          </button>
        </div>
      </div>

      <Chart
        type={chartType}
        data={casesHistory}
        id="confirmed"
        label={[cases, "Confirmed cases"]}
      />
      <Chart
        type={chartType}
        data={deathHistory}
        id="deaths"
        label={[deaths, "Deaths"]}
      />
      <Chart
        type={chartType}
        data={recoveredHistory}
        id="recovered"
        label={[recovered, "Recovered"]}
      />
    </div>
  );
};
