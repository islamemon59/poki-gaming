import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import GoogleButton from "../../Shared/GoogleLogin/GoogleLogin";
import { saveUserToDb } from "../../Api/saveUserToDB";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isValue, setIsValue] = useState("");
  const { signInUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      const res = await signInUser(email, password);
      console.log(res);
      if (res.user) {
        await saveUserToDb(res.user);
        Swal.fire({
          title: "Successfully Login",
          icon: "success",
          draggable: true,
        });
        navigate("/");
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-red-600/40">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-6">
          Welcome Back 👋
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
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
                className="input input-bordered w-full text-black pl-10 bg-white/90 placeholder-red-600 focus:outline-none focus:ring-2 font-medium focus:border-none focus:ring-red-600"
                required
              />
            </div>
          </div>

          {/* Password Input */}
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
                className="input input-bordered w-full pl-10 bg-white/90 focus:border-none text-black placeholder-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
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

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-red-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-red-600 hover:bg-black text-white font-semibold text-lg border-none shadow-lg"
          >
            Login
          </button>

          {/* Divider */}
          <div className="divider text-red-600">OR</div>

          {/* Sign up */}
          <p className="text-center text-red-600/80 mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-red-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>

        <GoogleButton />
      </div>
    </div>
  );
}
