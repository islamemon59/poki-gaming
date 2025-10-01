import { X } from "lucide-react";

const UserSlider = ({isOpen, toggleSidebar}) => {

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
        className={`fixed top-0 left-0 h-full w-64 max-w-full bg-[#83ffe7] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:w-80 md:w-96
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-title"
      >
        {/* Slider Header: Poki Logo and Close Button */}

          {/* Poki Logo (Text-based as per requirement) */}
          <h2
            id="sidebar-title"
            className="text-3xl font-extrabold text-blue-600 tracking-wider"
          >
            Poki
          </h2>

          {/* Close Icon Button (on the right) */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close menu"
          >
            {/* Replaced FaTimes with Lucide's X icon */}
            <X className="w-6 h-6" />
          </button>


        {/* Slider Body Content */}
        <div className="p-6">

        </div>
      </div>
    </div>
  );
};

export default UserSlider;
