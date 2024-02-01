import axios from "axios";

export const loginFetch = async(values) => {
    
  const res = await axios.post("https://hardwaremarket-backen.onrender.com/v1/api/sessions/login",values)
 
  return res.data
}

