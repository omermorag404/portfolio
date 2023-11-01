import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { chartData } from "../components/data/data";
import colors from "../components/styles/colors";
import "../components/styles/style.css";
const data = chartData;

export const Charts = () => {
  return (
    <div>
      <LineChart width={600} height={300} data={data} color={colors.text}>
        <Line type="monotone" dataKey="uv" stroke={colors.text} />
        <CartesianGrid stroke={colors.text} />
        <XAxis dataKey="name" color={colors.text} />
        <YAxis />
      </LineChart>
    </div>
  );
};
