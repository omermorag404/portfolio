import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navigation/navbar";
import "./components/styles/style.css";
const App = () => {
  return (
    <div>
      <div style={{ position: "sticky", top: "0", width: "100%", zIndex: 10 }}>
        <NavBar />
      </div>
      <div style={{ height: "24px" }}></div>
      <Outlet />
    </div>
  );
};

export default App;
