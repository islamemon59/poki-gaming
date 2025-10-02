import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#83ffe7] bg-[url(./bg-diamante.svg)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
