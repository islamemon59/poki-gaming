import { uploadImage } from "../../../Api/ImageUploadApi";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

export default function UpdateProfile({ setIsUpdate }) {
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
        setIsUpdate(false);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-full max-w-md border border-[#EDF6F8]">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#2E7A7A] text-center mb-6">
          Update Your Profile
        </h2>

        {/* Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-[#144D75] font-semibold text-sm mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-[#EDF6F8] border border-[#65B0D5]/40 text-[#144D75] placeholder-[#144D75]/70 focus:outline-none focus:ring-2 focus:ring-[#65B0D5] rounded-lg font-medium"
              required
            />
          </div>

          {/* Image Input */}
          <div>
            <label className="block text-[#144D75] font-semibold text-sm mb-2">
              Profile Image
            </label>
            <input
              name="image"
              type="file"
              className="file-input file-input-bordered w-full bg-[#EDF6F8] border border-[#65B0D5]/40 text-[#144D75] focus:outline-none focus:ring-2 focus:ring-[#65B0D5] rounded-lg cursor-pointer"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-[#2E7A7A] hover:bg-[#144D75] text-white font-semibold text-lg border-none shadow-md transition duration-200"
          >
            Update Profile
          </button>
        </form>

        {/* Cancel Option */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsUpdate(false)}
            className="text-[#144D75] hover:text-[#2E7A7A] text-sm font-medium underline underline-offset-2 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
