import {
  FaUserEdit,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function UserProfile() {
  const { user, signOutUser } = useAuth();
  const adminData = {
    name: `${user?.displayName}`,
    email: `${user?.email}`,
    location: "Dhaka, Bangladesh",
    avatarUrl: `${user?.photoURL}`, // Replace with actual image URL
  };

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
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition duration-500 hover:scale-[1.02]">
        {/* Header and Background */}
        <div className="h-20 bg-gradient-to-br relative">
          {/* Edit Button */}
          <button
            title="Edit Profile"
            className="absolute top-4 right-4 p-2 rounded-full bg-[#2E7A7A] text-white hover:bg-white/40 transition duration-200"
          >
            <FaUserEdit className="text-xl" />
          </button>

          <button
            title="Logout"
            onClick={handleLogout}
            className="absolute top-4 left-4 p-2 rounded-full bg-red-300 text-white hover:bg-red-500 transition duration-200"
          >
            <FaSignOutAlt className="text-xl" />
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-[#2E7A7A] object-cover shadow-xl"
            src={adminData.avatarUrl}
            alt={`Profile of ${adminData.name}`}
          />
        </div>

        <div className="p-6 text-center">
          {/* Name and Title */}
          <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
            {adminData.name}
          </h2>
          <p className="text-lg font-medium text-gray-600 mb-6">
            {adminData.title}
          </p>

          {/* Details Section */}
          <div className="space-y-4 text-center">
            {/* Email */}
            <div className="flex items-center justify-center space-x-3 text-gray-700 hover:text-gray-900 transition duration-150">
              <FaEnvelope className="text-xl text-[#2E7A7A]" />
              <span className="font-medium">{adminData.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
