import { FaUserEdit, FaEnvelope } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Link } from "react-router";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";

export default function UserProfile() {
  useDynamicTitle("Profile");
  const { user } = useAuth();
  const adminData = {
    name: `${user?.displayName}`,
    email: `${user?.email}`,
    location: "Dhaka, Bangladesh",
    avatarUrl: `${user?.photoURL}`, // Replace with actual image URL
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-red-600/40 overflow-hidden transform transition duration-500 hover:scale-[1.02]">
        {/* Header / Background */}
        <div className="h-24 relative">
          {/* Edit Button */}
          <Link
          to="/updateProfile"
            title="Edit Profile"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/30 hover:bg-white text-red-600 transition-colors duration-300"
          >
            <FaUserEdit className="text-xl" />
          </Link>

          {/* Logout Button */}
          <LogoutButton />
        </div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-16">
          <img
            className="w-32 h-32 rounded-full border-4 border-red-600 object-cover shadow-lg"
            src={adminData.avatarUrl}
            alt={`Profile of ${adminData.name}`}
          />
        </div>

        {/* Profile Info */}
        <div className="p-6 text-center">
          <h2 className="text-3xl font-extrabold text-red-600 mt-2">
            {adminData.name}
          </h2>
          <p className="text-lg font-medium text-gray-700 mb-6">
            {adminData.title}
          </p>

          {/* Details Section */}
          <div className="space-y-4 text-center">
            {/* Email */}
            <div className="flex items-center justify-center space-x-3 text-gray-700 hover:text-red-600 transition duration-150">
              <FaEnvelope className="text-xl text-red-600" />
              <span className="font-medium">{adminData.email}</span>
            </div>
          </div>

          {/* Optional: Add more info like phone, role, etc. */}
        </div>
      </div>
    </div>
  );
}
