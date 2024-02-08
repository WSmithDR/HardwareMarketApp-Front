import axios from "axios";

export const productsFetch = async () => {
<<<<<<< HEAD
    const res = await axios.get(
        "https://hardwaremarket-backen.onrender.com/v1/api/products"
    );
    const data = res.data.data.payload;
    console.log(data)
    return data;
=======
  const res = await axios.get(
    "https://hardwaremarket-backen.onrender.com/v1/api/products"
  );
  //   console.log(res);
  const data = res.data.data.payload;
  return data;
>>>>>>> rame
};
