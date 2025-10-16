import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import {
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import SearchBar from "../../Components/SearchSlider/SearchBar/SearchBar";

const Navbar = () => {
  const { user, signOutUser, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Logout Successful",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  if (loading) return <Loader />;

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-r from-black via-[#0d0d0d] to-black backdrop-blur-md shadow-lg px-6 py-4 md:py-5 transition-all duration-500">
      {/* Top section: logo + desktop search + buttons */}
      <div className="flex items-center justify-between md:justify-around max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold tracking-wide bg-clip-text text-red-600 hover:text-white transition-all duration-400"
          >
            innliv<span className="text-white">.com</span>
          </Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="w-full max-w-3xl lg:max-w-6xl xl:max-w-2xl">
            <SearchBar className="w-full h-14 lg:h-16 xl:h-20 bg-[#111] border border-red-700/40 rounded-full shadow-inner px-6 text-lg lg:text-xl focus:ring-2 focus:ring-red-500 transition-all duration-300" />
          </div>
        </div>

        {/* User Buttons + Mobile Menu Button */}
        <div className="flex items-center gap-3 md:gap-4">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-red-600/40 hover:scale-110 active:scale-95 transition-all duration-300"
                title="Logout"
              >
                <FaSignOutAlt className="text-lg" />
              </button>

              <Link to="/profile" className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar border-2 border-red-600 hover:border-white hover:scale-110 transition-all duration-300 shadow-md"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img alt="user" src={user?.photoURL} />
                  </div>
                </div>
              </Link>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-red-600/40 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <FaSignInAlt className="text-lg" />
              </Link>

              <Link
                to="/register"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-red-600/40 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <FaUserPlus className="text-lg" />
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl hover:text-red-500 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 md:hidden gap-4 bg-black/80 backdrop-blur-md border border-red-700/30 shadow-lg p-4 rounded-2xl animate-fadeIn">
          <SearchBar className="w-full mb-3" />

          {!user && (
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-red-600/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FaSignInAlt /> Login
              </Link>

              <Link
                to="/register"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-red-600/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FaUserPlus /> Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
