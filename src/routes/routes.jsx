import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import Trainers from "../pages/Trainers";
import News from "../pages/News";
import Explore from "../pages/Explore";
import About_us from "../pages/About_us";
import Contact_us from "../pages/Contact_us";
import NewsDetails from "../components/Newspage/NewsDetails";

export const router = createBrowserRouter([
  // All routes will be in this page
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/trainers",
        element: <Trainers />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/aboutus",
        element: <About_us />
      },
      {
        path: "/contactus",
        element: <Contact_us />
      },
    ]
  },
  {
    path: "/test",
    element: <NewsDetails />
  }
]);