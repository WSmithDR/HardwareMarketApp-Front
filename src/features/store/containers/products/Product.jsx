// import React from "react";
// import { useSelector } from "react-redux";

export const Product = (prop) => {
  const { title, description, price, trademark, stock } = prop;

  return (
    <div className="flex bg-[#DCDBDB] shadow-lg rounded-[20px]">
      <div className="flex justify-center items-center w-30 h-[246px]">
        <img
          className="h-[246px] w-[100%] rounded-l-[20px]"
          src="./public/images/grafica.jpg"
          alt={title}
        />
      </div>

      <div className="flex flex-col font-josefin text-black px-5 space-y-3">
        <strong className="text-[20px]">{title}</strong>
        <p>{description}</p>
        <strong>${price}</strong>
        <h2>{trademark}</h2>
        <p>{stock}</p>
      </div>
    </div>
  );
};
