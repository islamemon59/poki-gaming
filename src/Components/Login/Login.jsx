import { FaApple, FaMicrosoft, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const MicrosoftIcon = ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 23 23"
      className="microsoft-icon transition-colors duration-300"
    >
      <rect width="10" height="10" x="1" y="1" fill="#F25022" />
      <rect width="10" height="10" x="12" y="1" fill="#7FBA00" />
      <rect width="10" height="10" x="1" y="12" fill="#00A4EF" />
      <rect width="10" height="10" x="12" y="12" fill="#FFB900" />
    </svg>
  );

  // GoogleIcon.jsx
  const GoogleIcon = ({ size = 24 }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="google-icon transition-colors duration-300"
      >
        <path
          d="M23.99 12.27c0-.78-.07-1.53-.19-2.27H12v4.28h6.57c-.28 1.5-1.1 2.77-2.34 3.63v3.03h3.78c2.22-2.05 3.48-5.04 3.48-8.67z"
          fill="#4285F4"
        />
        <path
          d="M12 24c3.24 0 5.96-1.07 7.95-2.88l-3.78-3.03c-1.05.7-2.39 1.11-4.17 1.11-3.2 0-5.91-2.16-6.88-5.08H1.26v3.15C3.24 21.92 7.38 24 12 24z"
          fill="#0F9D58"
        />
        <path
          d="M5.12 14.31c-.25-.75-.4-1.54-.4-2.31s.15-1.56.4-2.31V6.54H1.26C.46 8.17 0 10 0 12s.46 3.83 1.26 5.46l3.86-3.15z"
          fill="#F4B400"
        />
        <path
          d="M12 4.77c1.76 0 3.33.6 4.57 1.77l3.42-3.42C17.96 1.15 15.24 0 12 0 7.38 0 3.24 2.08 1.26 5.54l3.86 3.15c.97-2.92 3.68-5.08 6.88-5.08z"
          fill="#DB4437"
        />
      </svg>
    );
  };

  return (
    <div>
      <h2 className="text-[#002b50] text-2xl font-bold text-center pt-4 px-3 mb-6">
        Welcome back
      </h2>
      <div className="flex flex-col gap-4">
        {/* Apple */}
        <button className="flex text-lg items-center justify-between gap-2 p-3 rounded-full border-3 border-[#009cff] bg-white text-[#009cff] hover:bg-[#009cff] group hover:text-white hover:opacity-90 transition font-bold duration-300 ease-in-out">
          <FaApple className="w-8 h-8 text-black group:hover:text-white" />
          <span className="flex-1">Log in with Apple</span>
        </button>

        {/* Google */}
        <button className="flex google text-lg items-center justify-between gap-2 p-3 rounded-full border-3 border-[#009cff] bg-white text-[#009cff] hover:text-white hover:bg-[#009cff] font-bold transition duration-300 ease-in-out">
          <GoogleIcon size={26} />
          <span className="flex-1">Log in with Google</span>
        </button>

        {/* Microsoft */}
        <button className="flex button-wrapper text-lg items-center justify-between font-bold gap-2 p-3 rounded-full border-3 border-[#009cff] text-[#009cff] hover:text-white hover:bg-[#009cff] transition duration-300 ease-in-out">
          <MicrosoftIcon size={26} />
          <span className="flex-1">Log in with Microsoft</span>
        </button>

        {/* Facebook */}
        <button className="flex text-lg items-center justify-between gap-2 p-3 rounded-full font-bold border-3 border-[#009cff] text-[#009cff] hover:text-white transition duration-300 ease-in-out hover:bg-[#009cff]">
          <FaFacebook className="w-7 h-7" />
          <span className="flex-1">Log in with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
