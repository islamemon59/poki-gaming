import { uploadImage } from "../../../Api/ImageUploadApi";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

export default function UpdateProfile({setIsUpdate}) {
  const { updateUserProfile } = useAuth();
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];

    const imageUrl = await uploadImage(image);

    updateUserProfile(name, imageUrl)
      .then(() => {
        toast.success("Profile Updated");
        setIsUpdate(false)
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-[#002b50] text-center mb-6">
          Update Your Profile
        </h2>
        <form onSubmit={handleUpdateProfile} className="space-y-5">
          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="text-[#002b50] font-semibold text-sm">Name</span>
            </label>
            <div className="">
              <input
                name="name"
                type="text"
                placeholder="your name"
                className="input input-bordered w-full text-gray-700  bg-white/30  placeholder-[#002b50] focus:outline-none focus:ring-2 font-medium focus:ring-[#EDF6F8]"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="text-[#002b50] text-sm font-semibold">
                Image
              </span>
            </label>
            <div className="relative">
              <input
                name="image"
                type="file"
                placeholder="upload image"
                className="input input-bordered w-full pl-10 bg-white/30 text-gray-700 placeholder-[#002b50] focus:outline-none focus:ring-2 focus:ring-[#EDF6F8]"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-[#2E7A7A] hover:bg-[#002b50] text-white font-semibold text-lg border-none shadow-lg"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
