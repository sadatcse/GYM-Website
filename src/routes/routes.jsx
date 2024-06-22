import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import Trainers from "../pages/Trainers";
import Contact_us from "../pages/Contact_us";
import News from "../pages/News";
import NewsDetails from "../components/Newspage/NewsDetails";
import Services from './../pages/Services';
import About_us from "../pages/About_us";
import Package_Membership from "../pages/Package_Membership";
import Meet from './../pages/Meet-the-team';
import Schedules from "../pages/Schedules";
import Explore from "../pages/Explore";
import Explore_Details from "../pages/Explore_Details";
import Trainers_Details from './../pages/Trainers_Details';

export const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('')
      },
      {
        path: "/trainers",
        element: <Trainers />,
        loader: () => fetch('')
      },
      {
        path: '/trainers/:name',
        element: <Trainers_Details />,
        loader: ({ params }) => fetch(`/${params.name}`)
      },
      {
        path: "/service",
        element: <Services/>
      },
      {
        path: "/news",
        element: <News />,
        loader: () => fetch('')
      },
      {
        path: "/test",
        element: <NewsDetails />
      },
      {
        path: "/explore/:name",
        element: <Explore />,
        loader: ({ params }) => fetch(`/${params.name}`)
      },
      {
        path: "/explore/details/:id",
        element: <Explore_Details/>,
        loader: ({ params }) => fetch(`/${params.id}`)
      },
      {
        path: "/aboutus/about",
        element: <About_us />
      },
      {
        path: "/aboutus/meettheteam",
        element: <Meet />
      },
      {
        path: "/aboutus/package",
        element: <Package_Membership />,
        loader: () => fetch('')
      },
      {
        path: "/aboutus/schedules",
        element: <Schedules />
      },
      {
        path: "/contactus",
        element: <Contact_us />
      }
    ]
  },

]);