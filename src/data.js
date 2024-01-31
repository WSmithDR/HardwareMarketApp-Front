import axios from "axios"




export const productsFetch = async() => {
    const res = await axios.get("https://hardwaremarket-backen.onrender.com/v1/api/products")
    const data = res.data.data.payload;
    return data
   
}