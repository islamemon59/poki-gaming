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
    <nav className="bg-black shadow-sm px-4 py-4 md:py-5">
      {/* Top section: logo + desktop search + buttons */}
      <div className="flex items-center justify-around gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl font-bold text-red-600 hover:text-white transition duration-300"
          >
            innliv<span className="text-white">.com</span>
          </Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:inline flex-1  max-w-2xl">
          <SearchBar className="w-full" />
        </div>

        {/* User Buttons + Mobile Menu Button */}
        <div className="flex items-center gap-3 md:gap-4">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <FaSignOutAlt className="text-lg" />
              </button>
              <Link to="/profile" className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar border-2 hover:scale-105 transition duration-300 border-red-600"
                >
                  <div className="w-10 rounded-full">
                    <img alt="user" src={user?.photoURL} />
                  </div>
                </div>
              </Link>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/login"
                className="flex items-center gap-2 px-3 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <FaSignInAlt className="text-lg" />
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-2 px-3 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <FaUserPlus className="text-lg" />
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 md:hidden gap-3">
          <SearchBar className="w-full" />

          {!user && (
            <div className="flex flex-col gap-2">
              <Link
                to="/login"
                className="flex items-center gap-2 px-3 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-lg"
              >
                <FaSignInAlt /> Login
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-2 px-3 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md hover:shadow-lg"
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
