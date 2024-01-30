import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import facebookLogo from "../../../public/images/facebook-48.png"
import logoIg from "../../../public/images/igLogo.png"

export const StartPage = () => {
  return (
    <div className=" h-[100vh] flex flex-col items-center bg-customColor">
      {/* Contenido de la página */}
      <Navbar />

      <div className="h-[500px] flex flex-col items-center py-24">
        <h1 className="text-3xl text-center font-josefin  ">
          Comienza A Comprar <br /> O vender tus <br /> productos
        </h1>

        <div className="py-16 ">
          <a href="/store">
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#01242F] duration-300 bg-colorButtons text-white h-9 w-40 font-josefin px-4 py-2 rounded shadow-xl">
              Comenzar
            </button>
          </a>
        </div>

        <div className="flex flex-row justify-between">
          <img
            src={logoIg}
            alt="logoig"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-customColor p-5 cursor-pointer w-20 h-22 "
          />
          <img
            src="./public/images/twitterLogo.png"
            alt="twitterLogo"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-customColor p-5 cursor-pointer w-20 h-22 "
          />
          <img
            src={facebookLogo}
            alt="facebookLogo"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-customColor p-5 cursor-pointer w-20 h-22 "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
