import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import "./components/styles/style.css";
import App from "./App";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { Quiz } from "./pages/quiz";
import { Cards } from "./pages/cards";
import reportWebVitals from "./reportWebVitals";
import { Todo } from "./pages/todo";
import { SearchBar } from "./pages/search";

const router = createMemoryRouter([
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
        element: <Dashboard />,
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
        element: <Todo />,
      },
      {
        path: "search",
        element: <SearchBar />,
      },
      {
        path: "quiz",
        element: <Quiz />,
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
