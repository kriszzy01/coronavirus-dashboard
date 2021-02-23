import React from "react";
import { commify } from "../utils";

interface PillProps {
  title: string;
  today: number;
  total: number;
}

export const Card: React.FC<PillProps> = ({ title, today, total }) => {
  return (
    <div className="card">
      <h2 className={`color-${title?.toLowerCase()}`}>{title}</h2>
      <p>{commify(today)} Today</p>
      <p>{commify(total)} Total</p>
    </div>
  );
};
