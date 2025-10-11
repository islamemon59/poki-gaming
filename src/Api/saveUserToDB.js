import axios from "axios";

export const saveUserToDb = async (user) => {
  try {
    const userInfo = {
      name: user?.displayName || "user",
      email: user?.email,
    };

    const { data } = await axios.post("http://localhost:5000/users", userInfo);
    console.log("✅ User saved:", data);
  } catch (error) {
    console.log(error);
  }
};
