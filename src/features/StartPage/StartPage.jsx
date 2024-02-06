import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import logoIg from "../../../public/images/igLogo.png";
import logoFb from "../../../public/images/facebook-48.png";
import logoTw from "../../../public/images/twitterx.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { productsFetch } from "../../data";
import * as productsActions from "../../redux/productsReducer/productsAction"

export const StartPage = () => {
  const navigate  = useNavigate()
 
  return (
    <div className="flex  min-h-screen items-center justify-between flex-col space-y-32 ">
      <Navbar />

      <div className="flex flex-col justify-center items-center h-auto w-auto space-y-10">
        <p className="text-[30px] font-josefin text-center">
          Comienza A Comprar <br /> O Vender Tus <br />
          Productos
        </p>

        <div className="p-5">
          <button
            className="bg-colorButtons font-josefin h-[36px] w-[150px] 
                  pb-2  text-white rounded-[8px] cursor-pointer
                  pt-1 md:w-[150px] flex items-center justify-center"
                  onClick={() => navigate("/store")}
          >
            Comenzar
          </button>
        </div>

        <div
          className="flex flex-row items-center justify-center w-72 h-36 
        space-x-20 p-2"
        >
          <div>
            <img src={logoFb} alt="facebook.png" className="cursor-pointer" />
          </div>
          <div>
            <img src={logoIg} alt="facebook.png" className="cursor-pointer" />
          </div>
          <div>
            <img src={logoTw} alt="facebook.png" className="cursor-pointer" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
