import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Regsiter";
import useAuth from "../../Hooks/useAuth";
import UserProfile from "../UserProfile/UserProfile";

const Authentication = () => {
  const { user } = useAuth();
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);
  return (
    <div className="w-full rounded-2xl p-6 mx-auto mt-6">
      {user ? (
        <UserProfile />
      ) : (
        <div>
          {isLogin ? (
            <Login toggleForm={toggleForm} />
          ) : (
            <Register toggleForm={toggleForm} />
          )}
        </div>
      )}
    </div>
  );
};

export default Authentication;
