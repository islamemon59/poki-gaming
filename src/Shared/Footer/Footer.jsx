import {
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaGlobe,
  FaInstagram,
} from "react-icons/fa"; // Icons for social media and language
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";
import Flag from "react-world-flags";
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
    // Outer container with the white background and subtle side effects (simulated with large padding)
    <footer className="bg-gray-700 pt-20 pb-12 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto flex flex-col lg:flex-row justify-between">
        {/* === Left Section: Logo, Language Selector === */}
        <div className="mb-10 lg:mb-0">
          {/* Logo and Tagline */}
          <div className="mb-4 flex items-center gap-6">
            <div className="text-2xl font-bold flex items-center">
              <Link
                to="/"
                className="text-2xl font-bold text-red-600 hover:text-white transition duration-300"
              >
                <img className="w-34" src={logo} alt="Logo" />
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
        </div>

        {/* === Right Section: Link Columns + Subscribe === */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-24 lg:pr-24 relative">
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-wider mb-4 text-gray-400">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, index) => (
                  <li onClick={() => scrollTo(0, 0)} key={link}>
                    <Link
                      to={column.to[index]}
                      className="text-[15px] font-bold transition duration-300 ease-in-out hover:text-red-600 text-white hover:border-b-2 border-[#002b50] hover:border-red-600"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* === Subscribe Section (Right Side) === */}
          <div className="col-span-2 md:col-span-1 mt-10 lg:mt-0">
            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-4 text-gray-400">
              Subscribe
            </h4>
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 text-gray-800 outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2 rounded-r-full transition-all duration-300"
              >
                Subscribe
              </button>
            </div>

            {/* Social Media Icons OR Subscribe Success */}
            {!subscribed ? (
              <div className="flex space-x-4 mt-6">
                <Link
                  to="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center bg-white group hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 justify-center rounded-full transition-all duration-300 ease-in-out"
                >
                  <FaInstagram className="text-black group-hover:text-white w-5 h-5" />
                </Link>
                <Link
                  to="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center bg-white group hover:bg-blue-600 justify-center rounded-full transition-all duration-300 ease-in-out"
                >
                  <FaFacebookF className="text-black group-hover:text-white w-5 h-5" />
                </Link>
                <Link
                  to="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center bg-white hover:bg-red-600 group justify-center rounded-full transition duration-300 ease-in-out"
                >
                  <FaYoutube className="text-black group-hover:text-white w-5 h-5" />
                </Link>
              </div>
            ) : (
              <div className="text-green-400 font-semibold text-sm mt-4 animate-fadeIn">
                ✅ You are subscribed!
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
