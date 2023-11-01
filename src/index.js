import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
// createMemoryRouter,
import "./components/styles/style.css";
import App from "./App";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Charts } from "./pages/charts";
import { Login } from "./pages/login";
import { Cards } from "./pages/cards";
import reportWebVitals from "./reportWebVitals";
import { ShoppingList } from "./pages/shoppingList";
const router = createMemoryRouter([
    {
        path: "/",
        element: React.createElement(App, null),
        children: [
            {
                index: true,
                element: React.createElement(Home, null),
            },
            {
                path: "home",
                element: React.createElement(Home, null),
            },
            {
                path: "about",
                element: React.createElement(About, null),
            },
            {
                path: "charts",
                element: React.createElement(Charts, null),
            },
            {
                path: "login",
                element: React.createElement(Login, null),
            },
            {
                path: "cards",
                element: React.createElement(Cards, null),
            },
            {
                path: "list",
                element: React.createElement(ShoppingList, null),
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(RouterProvider, { router: router })));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
