import React, { useState } from "react";
import { Link } from "react-router";
import Login from "../Login/Login";

const SocialLoginButton = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="max-w-md bg-white rounded-2xl p-6 mx-auto mt-6">
      <div className="flex justify-between items-center">
        <div className={`text-center flex-1 font-bold text-[#009cff] pb-2.5 ${isLogin && "drop-shadow-2xl"}`}>
          <button onClick={toggleLogin} >Register</button>
        </div>
        <div className="flex-1 text-center font-bold text-[#009cff] pb-2.5">
          <button onClick={toggleLogin} >Login</button>
        </div>
      </div>
      <Login isLogin={isLogin} />
    </div>
  );
};

export default SocialLoginButton;
