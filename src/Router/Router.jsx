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
import PrivacyPolicy from "../Shared/Footer/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "../Shared/Footer/ContactUs/ContactUs";
import CategoryGames from "../Components/Games/CategoryGames/CategoryGames";

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
       {
        path: "/category/:category",
        Component: CategoryGames,
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
        path: "/about_us",
        Component: AboutUs,
      },
        {
        path: "/terms_and_condition",
        Component: TermsAndConditions,
      },
        {
        path: "/privacy_policy",
        Component: PrivacyPolicy,
      },
        {
        path: "/contact_us",
        Component: ContactUs,
      },
       
]);
