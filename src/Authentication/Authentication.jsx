import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import UserProfile from "../Components/UserSlider/UserProfile/UserProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Regsiter";
import UpdateProfile from "../Components/UserSlider/UpdateProfile/UpdateProfile";

const Authentication = () => {
  const { user, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(false);
  const [update, setIsUpdate] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);
  return (
    <div className="w-full rounded-2xl p-6 mx-auto mt-6">
      {user ? (
        <div>
          {loading ? (
            <span className="loading loading-spinner text-accent"></span>
          ) : update ? (
            <UpdateProfile setIsUpdate={setIsUpdate} />
          ) : (
            <UserProfile setIsUpdate={setIsUpdate}  />
          )}
        </div>
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
