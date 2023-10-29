import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "./components/styles/flex";
import spacing from "./components/styles/spacing";
import NavBar from "./components/navigation/navbar";
const App = () => {
  return (
    <Flex
      style={{
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        gap: spacing.xxl,
      }}
    >
      <div style={{ position: "sticky", top: "0", width: "100%" }}>
        <NavBar />
      </div>
      <Outlet />
    </Flex>
  );
};

export default App;
