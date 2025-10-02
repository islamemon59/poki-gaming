import { FaApple, FaFacebook } from "react-icons/fa";
import { GoogleIcon } from "../GoogleIcon/GoogleIcon";
import { MicrosoftIcon } from "../MicrosoftIcon/MicrosoftIcon";
const Login = ({isLogin}) => {

  return (
    <div>
      <h2 className="text-[#002b50] text-2xl font-bold text-center pt-4 px-3 mb-6">
        {isLogin ? "Welcome back" : "Create a Poki Account"}
      </h2>
      <div className="flex flex-col gap-4">
        {/* Apple */}
        <button className="flex text-lg items-center justify-between gap-2 p-2 rounded-full border-3 border-[#009cff] bg-white text-[#009cff] hover:bg-[#009cff] group hover:text-white hover:opacity-90 transition font-bold duration-300 ease-in-out">
          <FaApple className="w-8 h-8 text-black group:hover:text-white" />
          <span className="flex-1">{isLogin ? "Log in with Apple" : "With Apple"}</span>
        </button>

        {/* Google */}
        <button className="flex google text-lg items-center justify-between gap-2 p-2 rounded-full border-3 border-[#009cff] bg-white text-[#009cff] hover:text-white hover:bg-[#009cff] font-bold transition duration-300 ease-in-out">
          <GoogleIcon size={26} />
          <span className="flex-1">{isLogin ? "Log in with Google" : "With Google"}</span>
        </button>

        {/* Microsoft */}
        <button className="flex button-wrapper text-lg items-center justify-between font-bold gap-2 p-2 rounded-full border-3 border-[#009cff] text-[#009cff] hover:text-white hover:bg-[#009cff] transition duration-300 ease-in-out">
          <MicrosoftIcon size={26} />
          <span className="flex-1">{isLogin ? "Log in with Microsoft" : "With Microsoft"}</span>
        </button>

        {/* Facebook */}
        <button className="flex text-lg items-center justify-between gap-2 p-2 rounded-full font-bold border-3 border-[#009cff] text-[#009cff] hover:text-white transition duration-300 ease-in-out hover:bg-[#009cff]">
          <FaFacebook className="w-7 h-7" />
          <span className="flex-1">{isLogin ? "Log in with Facebook" : "With Facebook"}</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
