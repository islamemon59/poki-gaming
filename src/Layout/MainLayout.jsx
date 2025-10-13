import React from "react";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
