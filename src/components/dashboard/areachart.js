import React from "react";
import { AreaChart, Card, Title } from "@tremor/react";
import { areaChartData } from "./dataDashboard";

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export const AreaChartChart = () => {
  return (
    <Card>
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className="max-w-xxs mx-auto"
        data={areaChartData}
        index="date"
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        colors={["indigo", "cyan"]}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
};
