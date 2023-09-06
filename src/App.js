// App.js
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Reports from "./routes/Reports";
import AppLayout from "./components/AppLayout";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
