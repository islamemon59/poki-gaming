import React, { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa"; // Using Font Awesome icons from react-icons
import UserSlider from "../../Components/UserSlider/UserSlider";
import SearchSlider from "../../Components/SearchSlider/SearchSlider";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  // The color #009cff is defined as a custom utility for Tailwind below
  const iconColor = "#009cff";
  const [isOpen, setIsOpen] = useState(false);
  const [isSlider, setIsSlider] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleSlider = () => {
    setIsSlider(!isSlider);
  };

  return (
    // Outer container with the light teal-blue background effect
    <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-xl z-50 fixed top-3 left-6">
      {/* Main NavBar Container */}
      <nav className="flex items-center justify-between h-16 bg-white rounded-lg shadow-inner w-42">
        {/* Left Side: Logo */}
        <Link
          to="/"
          className="flex items-center flex-1 hover:scale-105 transition-transform duration-300"
        >
          <img src={logo} className="w-28" alt="logo" />
        </Link>

        {/* Right Side: Icons */}
        <div className="flex items-center flex-col gap-6">
          {/* User Icon */}
          <button onClick={toggleSidebar} className="cursor-pointer">
            <FaUser className="w-5 h-5" style={{ color: iconColor }} />
          </button>

          {/* Search Icon */}
          <button onClick={toggleSlider} className="cursor-pointer">
            <FaSearch className="w-5 h-5" style={{ color: iconColor }} />
          </button>
        </div>

        {/* Sliders */}
        <UserSlider isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <SearchSlider isSlider={isSlider} toggleSlider={toggleSlider} />
      </nav>
    </div>
  );
};

export default Navbar;
