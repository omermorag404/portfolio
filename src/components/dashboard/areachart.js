import React from "react";
import { AreaChart, Card, Title } from "@tremor/react";
import { areaChartData } from "./dataDashboard";

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export const AreaChartChart = () => {
  return (
    <Card>
      <Title>Sales Over Time:</Title>
      <AreaChart
        className=" mx-auto"
        data={areaChartData}
        index="date"
        categories={["ActualSales", "Target Sales"]}
        colors={["indigo", "cyan"]}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
};
