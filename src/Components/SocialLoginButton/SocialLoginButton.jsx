import React from "react";
import { Link } from "react-router";

const SocialLoginButton = () => {
  return (
    <div className="max-w-md bg-white rounded-2xl p-6 mx-auto mt-6">
      <div className="flex justify-between items-center">
        <div className="text-center flex-1 font-bold text-[#009cff]">
          {" "}
          <Link to="/register">Register</Link>
        </div>
        <div className="flex-1 text-center font-bold text-[#009cff]">
          {" "}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLoginButton;
