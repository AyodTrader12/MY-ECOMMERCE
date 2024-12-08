import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [{ index: true, element: <Home /> }],
  },
]);
