import axios from "axios";

export const productsFetch = async () => {
  const res = await axios.get(
    "https://hardwaremarketapp-back.onrender.com/v1/api/products"
  );
  const data = res.data.data.payload;

  return data;
};
