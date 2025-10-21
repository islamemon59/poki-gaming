import { useNavigate } from "react-router";
import { uploadImage } from "../../../Api/ImageUploadApi";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import Loader from "../../../Shared/Loader/Loader";
import { useState } from "react";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";

export default function UpdateProfile() {
  useDynamicTitle("Update Profile");
  const { updateUserProfile, user, loading } = useAuth();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];

    const imageUrl = await uploadImage(image);

    updateUserProfile(name, imageUrl)
      .then(() => {
        toast.success("Profile Updated");
        setIsLoading(false)
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };



  if(loading) return <Loader/>


  const handleUser = () => {
    if(!user){
      return navigate("/")
    }
  }

  handleUser()

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-full max-w-md border border-red-600/30">
        {/* Title */}
        <h2 className="text-3xl font-bold text-red-600 text-center mb-6">
          Update Your Profile
        </h2>

        {/* Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-red-600 font-semibold text-sm mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-white/90 border border-red-600/40 text-black placeholder-red-600/70 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg font-medium"
              required
            />
          </div>

          {/* Image Input */}
          <div>
            <label className="block text-red-600 font-semibold text-sm mb-2">
              Profile Image
            </label>
            <input
              name="image"
              type="file"
              className="file-input file-input-bordered w-full bg-white/90 border border-red-600/40 text-black focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg cursor-pointer"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-red-600 hover:bg-black text-white font-semibold text-lg border-none shadow-md transition duration-200"
          >
            {isLoading ? <span className="loading loading-spinner loading-sm text-white"></span> : "Update Profile"}
          </button>
        </form>

      </div>
    </div>
  );
}
