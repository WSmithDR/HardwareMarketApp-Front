import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/startPage");
    }, 4000);
  }, []);
  return (
    <div className="gap-5 w-full h-screen bg-[#01242F] flex justify-center items-center flex-col text-white ">
      <div>
        {/* <img className="w-28" src="/public/images/h.png" alt="cuadrado"></img> */}
        <svg
          className="w-20 h-20"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
          ></path>
        </svg>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-josefin">Hardware Market</h1>
        <p className="">BUEN ESTADO BUENOS PRODUCTOS</p>
      </div>
      <svg
        className="animate-spin h-12 w-12"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M18.364 5.636 16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"
          fill="#ffffff"
          class="fill-000000"
        ></path>
      </svg>
    </div>
  );
};

export default WelcomePage;
