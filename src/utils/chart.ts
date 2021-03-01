import { ChartOptions } from "chart.js";
import { ChartData, WorldWide, Province } from "../types";
import { commify } from "./helpers";

export function getTotal(
  country: Record<string, Province>,
  world: WorldWide,
  targetData: string
) {
  if (targetData === "Global") {
    return {
      deaths: world.deaths,
      cases: world.cases,
      recovered: world.recovered,
    };
  }

  const {
    stats: { deaths, confirmed, recovered },
  } = country[targetData];

  return {
    deaths,
    cases: confirmed,
    recovered,
  };
}

export function historicalToChartData(data: Record<string, number>) {
  let convertedData: ChartData[] = [];
  let lastData;

  for (let key in data) {
    if (lastData) {
      let dataChange = data[key] - lastData;

      let nextDay = new Date(key);
      let today = new Date(nextDay);
      today.setDate(today.getDate() + 2);
      let newKey = today.toUTCString(); //Formatted to be supported by moment.js

      convertedData = [
        ...convertedData,
        { x: newKey, y: dataChange < 0 ? 0 : dataChange },
      ];
    }
    lastData = data[key];
  }

  return convertedData;
}

export function historicalData(
  targetData: string,
  world: Record<string, number>,
  country: Record<string, number>
) {
  if (targetData === "Global") {
    return historicalToChartData(world);
  }

  return historicalToChartData(country);
}

function getPlaceKeys(value: string | number) {
  const seperateByComma = commify(+value);

  return seperateByComma.split("").filter((e) => e === ",").length;
}

function toPlaceValue(value: string | number) {
  let initialValue = String(value);

  let places: Record<number, string> = {
    1: "k",
    2: "M",
    3: "B",
    4: "T",
  };

  const placeValueKeys = getPlaceKeys(initialValue); //Determine which letter will be added

  let valueArray = initialValue.split("");
  let lastThree = valueArray.reverse().slice(0, 3).join(""); //Select the last three values

  let withoutLastThree = +initialValue.replace(lastThree, ""); //Delete the last three values from initialValue
  if (valueArray.length <= 3) {
    withoutLastThree = +initialValue;
  }

  let result = commify(withoutLastThree).replace(",", ".");
  if (result.includes(".") && result.endsWith("0")) {
    result = String(+result); //Remove 0's from end of decimal eg: 2.500 = 2.5
  }

  if (result.endsWith(".")) {
    result = result.replaceAll(".", "");
  }

  let placeValue = !places[placeValueKeys] ? "" : places[placeValueKeys];

  return result + placeValue;
}

const baseChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          unit: "month",
          displayFormats: {
            month: "MMM",
          },
        },
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        position: "right",
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return toPlaceValue(value);
          },
        },
      },
    ],
  },
};

export const chartOptions: any = {
  bar: {
    ...baseChartOptions,
  },
  line: { ...baseChartOptions },
};
