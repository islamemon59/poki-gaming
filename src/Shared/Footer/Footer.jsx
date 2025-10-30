import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa"; // Icons for social media and language
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) {
      Swal.fire({
        title: "Please enter your email!",
        icon: "warning",
        confirmButtonColor: "#ef4444",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Invalid Email Address",
        text: "Please enter a valid email format (example@mail.com)",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
      return;
    }

    try {
      // 🚀 2. API request
      const { data } = await axios.post("http://localhost:5000/subscribe", {
        email,
      });

      // ✅ 3. Success alert
      Swal.fire({
        title: "Thank You for Subscribing! 🎉",
        text: data?.message || "You’ll now receive updates and news from us 🎮",
        icon: "success",
        confirmButtonColor: "#ef4444",
      });

      console.log("Subscription Response:", data);
      setEmail("");
    } catch (error) {
      // ❌ 4. Handle API or network errors
      const errorMsg =
        error?.response?.data?.message ||
        "Something went wrong. Please try again later.";

      Swal.fire({
        title: "Subscription Failed",
        text: errorMsg,
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
      console.error("Subscribe Error:", error);
    }
  };

  const linkColumns = [
    {
      title: "Important Page",
      links: [
        "About Us",
        "Contact Us",
        "Privacy Policy",
        "Terms and Conditions",
      ],
      to: ["/about_us", "/contact_us", "/privacy_policy", "/terms_and_condition"],
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
          <p className="mt-3 text-base font-semibold text-white">
            We drop new free online games, push out an update, or corral
            everybody for a community bash, we’re stacking the bricks on
            something way bigger than just code and pixels. At innliv.com, we
            don’t just crank out games, we make ’em breathe. Wanna come along
            for the ride in the ultimate online playground? The door's wide
            open.
          </p>
        </div>

        {/* === MIDDLE: Link Columns === */}
        <div className="grid gap-6 sm:gap-8 justify-center items-center text-center sm:text-start">
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4 text-red-500">
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
              to="https://www.instagram.com/innliv/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full group hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              <FaInstagram className="text-black group-hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              to="https://www.facebook.com/people/InNliv/61583208864825/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full group hover:bg-blue-600 transition-all duration-300"
            >
              <FaFacebookF className="text-black group-hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            {/* Pinterest Icon */}
            <Link
              to="https://www.pinterest.com/forme458/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full group hover:bg-red-500 transition-all duration-300"
            >
              <FaPinterestP className="text-black group-hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCS23cj0CSU7yu1NX_77reAw"
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
        © {new Date().getFullYear()}{" "}
        <Link
          className="font-extrabold hover:text-red-500 transition-all duration-300"
          to="https://innliv.com/"
        >
          innliv.com
        </Link>{" "}
        — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
