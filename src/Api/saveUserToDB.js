import axios from "axios";

export const saveUserToDb = async (user) => {
  try {
    const userInfo = {
      name: user?.displayName || "user",
      email: user?.email,
    };

    const { data } = await axios.post("https://server.innliv.com/users", userInfo);
    console.log("✅ User saved:", data);
  } catch (error) {
    console.log(error);
  }
};
