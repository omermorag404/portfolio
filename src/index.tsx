import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// createBrowserRouter,
import "./components/styles/style.css";
import App from "./App";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Charts } from "./pages/charts";
import { Login } from "./pages/login";

import { Cards } from "./pages/cards";
import reportWebVitals from "./reportWebVitals";
import { ShoppingList } from "./pages/shoppingList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "list",
        element: <ShoppingList />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
