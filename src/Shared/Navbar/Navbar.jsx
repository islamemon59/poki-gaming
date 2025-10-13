import logo from "../../assets/logo.png";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const { user, signOutUser } = useAuth();

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

  return (
    <div className="navbar shadow-sm bg-black py-5 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="logo" className="w-24" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        {user ? (
          // ✅ When Logged In
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
          // 🚪 When Logged Out
          <div className="flex items-center gap-3">
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
      </div>
    </div>
  );
};

export default Navbar;
