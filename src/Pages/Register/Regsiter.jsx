import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import GoogleButton from "../../Shared/GoogleLogin/GoogleLogin";
import { saveUserToDb } from "../../Api/saveUserToDB";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isValue, setIsValue] = useState("");
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    try {
      const res = await createUser(email, password);
      if (res.user) {
        await saveUserToDb({ displayName: name, email: res?.user?.email });
        Swal.fire({
          title: "Registration Successful",
          icon: "success",
          draggable: true,
        });
        navigate("/");
        form.reset();
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(`${error?.message}`);
    }
  };

  return (
<div className="flex items-center justify-center min-h-screen bg-black">
  <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-red-600/40">
    <h2 className="text-3xl font-bold text-red-600 text-center mb-6">
      Create Account 🌱
    </h2>

    <form onSubmit={handleRegister} className="space-y-5">
      {/* Name */}
      <div className="form-control">
        <label className="label">
          <span className="text-red-600 font-semibold">Full Name</span>
        </label>
        <div className="relative">
          <FiUser className="absolute left-3 top-3 text-red-600 text-xl" />
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            className="input input-bordered w-full pl-10 bg-white/90 focus:border-none text-black placeholder-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="form-control">
        <label className="label">
          <span className="text-red-600 font-semibold">Email</span>
        </label>
        <div className="relative">
          <FiMail className="absolute left-3 top-3 text-red-600 text-xl" />
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            className="input input-bordered w-full pl-10 focus:border-none bg-white/90 text-black placeholder-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className="form-control">
        <label className="label">
          <span className="text-red-600 font-semibold">Password</span>
        </label>
        <div className="relative">
          <FiLock className="absolute left-3 top-3 text-red-600 text-xl" />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            onChange={(e) => setIsValue(e.target.value)}
            className="input input-bordered w-full pl-10 focus:border-none bg-white/90 text-black placeholder-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          {isValue && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-red-600/80 hover:text-red-600"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn w-full bg-red-600 hover:bg-black text-white font-semibold text-lg border-none shadow-lg"
      >
        Register
      </button>

      {/* Divider */}
      <div className="divider text-red-600">OR</div>

      {/* Login Link */}
      <p className="text-center text-red-600/80 mt-4">
        Already have an account?{" "}
        <Link
        to="/login"
          className="text-red-600 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </form>

    <GoogleButton />
  </div>
</div>

  );
}
