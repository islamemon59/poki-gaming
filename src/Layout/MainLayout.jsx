import React from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();

  // Hide navbar for game details page
  const hideNavbar = location.pathname.startsWith("/games/");
  return (
    <div>
      {!hideNavbar && (
        <>
          <Navbar />
          <div className="lg:h-24 h-19 bg-black"></div>
        </>
      )}

      <div className="min-h-screen bg-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
