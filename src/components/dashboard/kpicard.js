import React from "react";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import { kpiData } from "./dataDashboard";

export const KpiCard = ({ kpiData }) => (
  <Card className="max-w-xs mx-auto" decorationColor="indigo">
    <Text>{kpiData.text}</Text>
    <Metric>{kpiData.amount}</Metric>
    <Flex className="mt-4">
      <Text>{kpiData.target}</Text>
      <Text>{kpiData.targetNumber}</Text>
    </Flex>
    <ProgressBar value={kpiData.progressBar} className="mt-2" />
  </Card>
);
