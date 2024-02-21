import axios from "axios";

export const registerUserFetch = async (user) => {
  const res = await axios.post(
    "https://hardwaremarketapp-back.onrender.com/v1/api/sessions/register",
    user
  );
  return res;
};
