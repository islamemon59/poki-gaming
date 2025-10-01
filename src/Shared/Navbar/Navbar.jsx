import React, { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa"; // Using Font Awesome icons from react-icons
import { Link } from "react-router";
import UserSlider from "../../Components/UserSlider/UserSlider";
import SearchSlider from "../../Components/SearchSlider/SearchSlider";

const Navbar = () => {
  // The color #009cff is defined as a custom utility for Tailwind below
  const iconColor = "#009cff";
  const [isOpen, setIsOpen] = useState(false);
  const [isSlider, setIsSlider] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleSlider = () => {
    setIsSlider(!isSlider);
  };

  return (
    // Outer container with the light teal-blue background effect
    <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-xl fixed top-3 left-3">
      {/* Main NavBar Container */}
      <nav className="flex items-center justify-between gap-6 h-16  mx-auto bg-white rounded-lg shadow-inner">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-2 mx-6">
          {/* A simple placeholder for the POKI logo */}
          <div className="text-4xl font-bold text-gray-900 flex items-center">
            {/* P */}
            <span className="text-4xl font-extrabold tracking-tight">P</span>
            {/* O with a blue fill (simulating the POKI logo style) */}
            <div className="relative h-9 w-9 mx-0.5">
              {/* Outer circle (O) */}
              <div className="absolute top-0 left-0 h-full w-full border-4 border-gray-900 rounded-full"></div>
              {/* Blue fill (Water effect) */}
              <div
                className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-full"
                style={{ backgroundColor: iconColor }}
              ></div>
            </div>
            {/* K I */}
            <span className="text-4xl font-extrabold tracking-tight">ki</span>
          </div>
        </div>

        {/* Right Side: Icons */}
        <div className="flex flex-col gap-5">
          {/* User Icon */}
          <button onClick={toggleSidebar} className=" cursor-pointer">
            <FaUser className="w-5 h-5" style={{ color: iconColor }} />
          </button>




          {/* Search Icon */}
          <button onClick={toggleSlider} className=" cursor-pointer">
            <FaSearch className="w-5 h-5" style={{ color: iconColor }} />
          </button>
        </div>
            <UserSlider isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <SearchSlider isSlider={isSlider} toggleSlider={toggleSlider} />
      </nav>
    </div>
  );
};

export default Navbar;
