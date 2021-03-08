import React from "react";
import { DataChart } from "./DataChart";
import { DataSummary } from "./DataSummary";

export const Overview: React.FC = () => {
  return (
    <>
      <DataSummary />
      <DataChart />
    </>
  );
};
