import React from "react";
import toast from "react-hot-toast";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const LogoutButton = () => {
  const { signOutUser } = useAuth();
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
    <button
      title="Logout"
      onClick={handleLogout}
      className="absolute top-4 left-4 p-2 rounded-full bg-red-300 text-white hover:bg-red-500 transition-colors duration-300"
    >
      <FaSignOutAlt className="text-xl" />
    </button>
  );
};

export default LogoutButton;
