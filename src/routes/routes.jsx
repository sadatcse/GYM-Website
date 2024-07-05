import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import Trainers from "../pages/Trainers";
import Contact_us from "../pages/Contact_us";
import News from "../pages/News";
import NewsDetails from "../components/Newspage/NewsDetails";
import Services from './../pages/Services';
import About_us from "../pages/About_us";
import Explore from "../pages/Explore";
import Explore_Details from "../pages/Explore_Details";
import Trainers_Details from './../pages/Trainers_Details';
import PrivacyPolicy from "../pages/legal/App_Privacy_Policy";
import TermsOfUse from "../pages/legal/Terms_of_use";
import CookiePolicy from "../pages/legal/Cookie_policy";
import PrivacyPolicyfb from "../pages/legal/privacy_policy_ads";
import RefundPolicy from "../pages/legal/Refund_policy";
import WebLogin from "../pages/WebLogin";
import Error404 from "../pages/Error404";
import Root_Dashboard from './../pages/Dashboard/Root';
import RedirectToShopify from "./Fakeadmin";
import UnderConstruction from "../pages/UnderConstruction";
import Panel from "../pages/Dashboard/Panel";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('')
      },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: '/trainers/:name',
        element: <Trainers_Details />,
        loader: ({ params }) => fetch(`https://multigym-premium-server.vercel.app/trainer/get-name/${params.name}`)
      },
      {
        path: "/service",
        element: <Services/>
      },
      {
        path: "/blog",
        element: <News />
      },
      
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/explore/details/:id",
        element: <Explore_Details/>,
 
      },
      {
        path: "/aboutus/about",
        element: <About_us />
      },
      {
        path: "/contactus",
        element: <Contact_us />
      },
      {
        path: "/blog/:id",
        element: <NewsDetails />,
        loader: ({ params }) => fetch(`https://multigym-premium-server.vercel.app/news/get-id/${params.id}`)
      },
      {
        path: "/legal/appprivacypolicy",
        element: <PrivacyPolicy />
      },
      {
        path: "/legal/termsofuse",
        element: <TermsOfUse />
      },
      {
        path: "/legal/refundpolicy",
        element: <RefundPolicy />
      },
 
      {
        path: "/legal/cookiepolicy",
        element: <CookiePolicy />
      },
      {
        path: "/legal/privacypolicyads",
        element: <PrivacyPolicyfb />
      },
      {
        path: "/webadmin",
        element: <WebLogin />  //
      },
      {
        path: "/under",
        element: <UnderConstruction />  //
      },
  
       
    ]
  },
  {
    path: "dashboard",
    element: <Root_Dashboard></Root_Dashboard>,
    errorElement: <Error404></Error404>,
    children: [
      // {
      //   path:'profile',
      //   element:
      // }
      {
        path:"/dashboard",
        element:<Panel></Panel>
      }
    ]

  },
  {
    path: "/admin",
    element: <RedirectToShopify />  //
  },
]
);