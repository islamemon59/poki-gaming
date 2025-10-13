import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import GameDetails from "../Components/Games/GameDetails/GameDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Regsiter";

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
]);
