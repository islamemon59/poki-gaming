/* eslint-disable no-unused-vars */
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"; // Icons for social media and language
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { useState } from "react";
import Swal from "sweetalert2";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      Swal.fire({
        title: "Please enter your email!",
        icon: "warning",
        confirmButtonColor: "#ef4444",
      });
      return;
    }

    setSubscribed(true);
    Swal.fire({
      title: "Thank you for subscribing!",
      text: "You’ll now receive updates and news from us 🎮",
      icon: "success",
      confirmButtonColor: "#ef4444",
    });
    setEmail("");
  };

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
    <footer className="bg-gray-700 pt-14 pb-10 px-4 sm:px-8  lg:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        {/* === LEFT: Logo + Tagline === */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Link
            to="/"
            className="text-2xl font-bold text-red-600 hover:text-white transition duration-300"
          >
            <img className="w-28 sm:w-36 md:w-40" src={logo} alt="Logo" />
          </Link>
          <p className="mt-3 text-base sm:text-lg font-semibold text-white">
            Let the world play
          </p>
        </div>

        {/* === MIDDLE: Link Columns === */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 justify-center sm:justify-start text-center sm:text-left">
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-wider mb-3 sm:mb-4 text-gray-400">
                {column.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {column.links.map((link, index) => (
                  <li onClick={() => scrollTo(0, 0)} key={link}>
                    <Link
                      to={column.to[index]}
                      className="text-[14px] sm:text-[15px] font-bold text-white hover:text-red-600 hover:border-b-2 border-transparent transition-all duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* === RIGHT: Subscribe + Socials === */}
        <div className="flex flex-col items-center place-content-center sm:items-center text-center sm:text-right">
          <h4 className="text-[11px] font-bold uppercase tracking-wider mb-4 text-gray-400">
            Subscribe
          </h4>

          {/* Input Box */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg w-full">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 text-gray-800 text-sm sm:text-base outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 sm:px-4 py-2 rounded-r-full transition-all duration-300"
            >
              Subscribe
            </button>
          </div>

          {/* Social Media or Success Message */}

          <div className="flex justify-center sm:justify-end space-x-3 sm:space-x-4 mt-6">
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full group hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              <FaInstagram className="text-black group-hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full group hover:bg-blue-600 transition-all duration-300"
            >
              <FaFacebookF className="text-black group-hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full group hover:bg-red-600 transition-all duration-300"
            >
              <FaYoutube className="text-black group-hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* === BOTTOM COPYRIGHT === */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} innliv.com — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
