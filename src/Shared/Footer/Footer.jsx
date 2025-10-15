/* eslint-disable no-unused-vars */
import React from "react";
import { FaTiktok, FaFacebookF, FaYoutube, FaGlobe } from "react-icons/fa"; // Icons for social media and language
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";
import Flag from "react-world-flags";
import logo from "../../assets/logo.png";

const Footer = () => {
  // Define colors based on the image's aesthetic
  const darkBlue = "#002b50"; // A deep blue for the text/logo (similar to the image)
  const lightBlue = "#009cff"; // The highlight color from your previous request

  // Link data for the right columns
  const linkColumns = [
    {
      title: "COMPANY",
      links: [
        "About Us",
        "Terms and Conditions",
        "Contact Us",
        "Privacy Policy",
      ],
      to: ["/aboutUs", "/termsCondition", "/contactUs", "/privacyPolicy"],
    },
  ];

  return (
    // Outer container with the white background and subtle side effects (simulated with large padding)
    <footer className="bg-gray-700 pt-20 pb-12 px-4 sm:px-6 lg:px-12">
      <div className=" mx-auto flex flex-col lg:flex-row justify-between">
        {/* === Left Section: Logo, Language Selector, Social Icons === */}
        <div className="mb-10 lg:mb-0">
          {/* Logo and Tagline (Reusing the Poki logo structure) */}
          <div className="mb-4 flex items-center gap-6">
            <div className="text-2xl font-bold flex items-center">
              <Link
                to="/"
                className="text-2xl font-bold text-red-600 hover:text-white transition duration-300"
              >
                innliv<span className="text-white">.com</span>
              </Link>
            </div>
            <p className="mt-2 text-lg font-bold text-white">
              Let the world play
            </p>
          </div>

          {/* Language Selector */}
          <div className="mb-8">
            <button className="flex items-center space-x-2 py-2 px-4 border-2 rounded-full text-base font-medium transition-all duration-300 ease-in-out hover:bg-gray-50 border-white text-white hover:text-red-600 hover:border-red-600">
              <Flag code="GB" className="shadow-md rounded-full h-6 w-6" />
              <span className="font-bold">English</span>
              <IoIosArrowDown className="font-bold" />
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* Note: FaFacebookF is used as a stand-in for the "P" icon on the actual Poki site, as the image shows a blue circle icon that isn't clearly Facebook/Twitter, but a placeholder is fine. */}
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center bg-white group hover:bg-black justify-center rounded-full transition-all duration-300 ease-in-out`}
            >
              <FaTiktok className="text-black group-hover:text-white w-5 h-5" />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center bg-white group hover:bg-blue-600 justify-center rounded-full transition-all duration-300 ease-in-out`}
            >
              <FaFacebookF className="text-black group-hover:text-white w-5 h-5" />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center bg-white hover:bg-red-600 group justify-center rounded-full transition duration-300 ease-in-out`}
            >
              <FaYoutube className="text-black group-hover:text-white w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* === Right Section: Link Columns === */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-24 lg:pr-24">
          {linkColumns.map((column) => (
            <div key={column.title}>
              {/* Column Title */}
              <h4 className="text-[11px] font-bold uppercase tracking-wider mb-4 text-gray-400">
                {column.title}
              </h4>

              {/* Links */}
              <ul className="space-y-3">
                {column.links.map((link, index) => (
                  <li key={link}>
                    <Link
                      to={column.to[index]}
                      href="#"
                      className="text-[15px] font-bold transition duration-300 ease-in-out hover:text-red-600 text-white hover:border-b-2 border-[#002b50] hover:border-red-600"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
