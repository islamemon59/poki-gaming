import { IoIosArrowBack } from "react-icons/io";
import logo from "../../assets/logo.png"
import Authentication from "../../Authentication/Authentication";

const UserSlider = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* 2a. Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar} // Close sidebar when clicking the backdrop
        aria-hidden={!isOpen}
        aria-label="Close menu"
      ></div>

      {/* 2b. Drawer/Slider Content */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-[350px] sm:max-w-lg lg:max-w-2xl bg-[#83ffe7] shadow-2xl z-50 transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-[800px]"}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-title"
      >
        {/* Poki Logo (Text-based as per requirement) */}
        {/* Left Side: Logo */}
        <div className="flex items-center justify-center mt-6 space-x-2 mx-6">
          <img src={logo} alt="" />
        </div>

        {/* Close Icon Button (on the right) */}
        <button
          onClick={toggleSidebar}
          className="p-4 rounded-full text-gray-500 absolute top-6 -right-6 bg-white transition-all duration-300 custom-shadow"
          aria-label="Close menu"
        >
          <IoIosArrowBack className="w-8 h-8" />
        </button>

        {/* Slider Body Content */}
        <div className="p-6 mx-auto">
          {" "}
          <Authentication/>
        </div>
      </div>
    </div>
  );
};

export default UserSlider;
