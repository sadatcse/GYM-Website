import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    // All routes will be in this page
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path:"/",
            element:<Home/>
        }
      ]
    },
  ]);