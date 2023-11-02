import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "./components/styles/flex";
import spacing from "./components/styles/spacing";
import NavBar from "./components/navigation/navbar";
import "./components/styles/style.css";
const App = () => {
    return (React.createElement(Flex, { style: {
            alignItems: "center",
            flexDirection: "column",
            width: "100vw",
            gap: spacing.xxl,
            flexWrap: "wrap",
        } },
        React.createElement("div", { style: { position: "sticky", top: "0", width: "100%", zIndex: 999 } },
            React.createElement(NavBar, null)),
        React.createElement(Outlet, null)));
};
export default App;
