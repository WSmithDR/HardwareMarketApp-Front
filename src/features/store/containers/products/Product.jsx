// import React from "react";
// import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export const Product = (prop) => {
  const { title, description, price, trademark, stock } = prop;

  return (
    <div className="flex bg-[#DCDBDB] shadow-lg rounded-[20px] ">
      <div className="flex justify-center items-center w-30 h-[220px]">
        <Link to="/detail">
          <img
            className="h-[220px] w-[100%] rounded-l-[20px] cursor-pointer"
            src="./public/images/grafica.jpg"
            alt={title}
          />
        </Link>
      </div>

      <div className="flex flex-col font-josefin text-black px-5 space-y-3 mt-5">
        <Link to="/detail">
          <strong className="text-[20px] cursor-pointer">{title}</strong>
          <p className="text-[20px] cursor-pointer">{description}</p>
          <strong className="text-[20px] cursor-pointer">${price}</strong>
        </Link>
        <h2>{trademark}</h2>
        <p>{stock}</p>
        {/* <div className="flex justify-center items-center">⭐⭐⭐⭐</div> */}
      </div>
    </div>
  );
};
