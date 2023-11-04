import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navigation/navbar";
import "./components/styles/style.css";
const App = () => {
    return (React.createElement("div", null,
        React.createElement("div", { style: { position: "sticky", top: "0", width: "100%", zIndex: 999 } },
            React.createElement(NavBar, null)),
        React.createElement("div", { style: { height: "24px" } }),
        React.createElement(Outlet, null)));
};
export default App;
