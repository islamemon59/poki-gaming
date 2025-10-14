import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import GameDetails from "../Components/Games/GameDetails/GameDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Regsiter";
import UserProfile from "../Components/UserSlider/UserProfile/UserProfile";
import UpdateProfile from "../Components/UserSlider/UpdateProfile/UpdateProfile";
import AboutUs from "../Shared/Footer/AboutUs/AboutUs";
import TermsAndConditions from "../Shared/Footer/TermsAndConditions/TermsAndConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/games/:id",
        Component: GameDetails,
      },
       {
        path: "/profile",
        Component: UserProfile,
      },
       {
        path: "/updateProfile",
        Component: UpdateProfile,
      },

    ],
  },
        {
        path: "/login",
        Component: Login,
      },
        {
        path: "/register",
        Component: Register,
      },
        {
        path: "/aboutUs",
        Component: AboutUs,
      },
        {
        path: "/termsCondition",
        Component: TermsAndConditions,
      },
       
]);
