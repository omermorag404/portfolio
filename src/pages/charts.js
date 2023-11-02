import React from "react";
import { ChartLine } from "../components/dashboard/linechart";
import { ChartPie } from "../components/dashboard/pieChart";
import "../components/styles/style.css";

export const Charts = () => {
  return (
    <div>
      <ChartPie />
      <ChartLine />
    </div>
  );
};
