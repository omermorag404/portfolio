import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
} from "@tremor/react";
import React from "react";
import { kpiData } from "../components/dashboard/dataDashboard";
import { KpiCard } from "../components/dashboard/kpicard";
import "../components/styles/style.css";
import "../components/styles/tailwind.css";
export const Charts = () => {
  return (
    <div>
      <main className="p-12">
        <Title>Dashboard</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <TabGroup className="mt-6">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Detail</Tab>
            <Tab>Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                {kpiData.map((item, index) => {
                  return <KpiCard kpiData={item} />;
                })}
              </Grid>
              <div className="mt-6">
                <Card>
                  <div className="h-80" />
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <div className="h-96" />
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
      <div>
        {kpiData.map((item, index) => {
          // eslint-disable-next-line react/jsx-key
          return <KpiCard kpiData={item} />;
        })}
      </div>
    </div>
  );
};
