import React from "react";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#83ffe7] bg-[url(./bg-diamante.svg)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
