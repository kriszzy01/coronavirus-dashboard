interface ChartData {
  x: string;
  y: number;
}

export function historicalToChartData(data: Record<string, number>) {
  let convertedData: ChartData[] = [];
  let lastData;

  for (let key in data) {
    if (lastData) {
      convertedData = [
        ...convertedData,
        { x: key, y: lastData ? data[key] - lastData : data[key] },
      ];
    }
    lastData = data[key];
  }

  return convertedData;
}

export const chartOptions = {
  bar: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          type: "time",
          time: {
            unit: "month",
          },
        },
      ],
    },
  },
  line: {},
};
