import {
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import React from "react";
import { AreaChartChart } from "../components/dashboard/areachart";
import { kpiData } from "../components/dashboard/dataDashboard";
import { KpiCard } from "../components/dashboard/kpicard";
import { TableChart } from "../components/dashboard/table";
import "../components/styles/style.css";
import "../components/styles/tailwind.css";
import { H3 } from "../components/styles/typography";
export const Dashboard = () => {
  return (
    <div>
      <H3>My Dashboard</H3>
      <main className="p-4">
        <TabGroup className="mt-6">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Detail</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                {kpiData.map((item, index) => {
                  return <KpiCard kpiData={item} />;
                })}
              </Grid>
              <div className="mt-6">
                <AreaChartChart />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <TableChart />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </div>
  );
};