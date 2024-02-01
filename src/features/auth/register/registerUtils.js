import axios from "axios";

export const registerUserFetch = async (user) => {
  const res = await axios.post(
    "https://hardwaremarket-backen.onrender.com/v1/api/sessions/register",
    user
  );
  return res;
};
