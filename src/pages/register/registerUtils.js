import axios from "axios"



export const registerUserFetch = async(user) => {
   
     const res = await  axios.post("https://g1fprh3j-8080.brs.devtunnels.ms/v1/api/sessions/register",user)
     return res
}