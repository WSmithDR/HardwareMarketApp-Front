import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export const StartPage = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-40 ">
      <Navbar />

      <div className="flex flex-col justify-center items-center h-auto w-auto space-y-10">
        <p className="text-[30px] font-josefin text-center">
          Comienza A Comprar <br /> O Vender Tus <br />
          Productos
        </p>

        <div className="p-5">
          <button
            className="bg-colorButtons font-josefin h-[35px] w-[150px] 
                  pb-2  text-white rounded-[8px] cursor-pointer
                  pt-1 md:w-[150px]"
          >
            Comenzar
          </button>
        </div>

        <div
          className="flex flex-row items-center justify-center w-72 h-36 
        space-x-20 p-2"
        >
          <div>
            <img
              src="./public/images/facebook-48.png"
              alt="facebook.png"
              className="cursor-pointer"
            />
          </div>
          <div>
            <img
              src="./public/images/igLogo.png"
              alt="facebook.png"
              className="cursor-pointer"
            />
          </div>
          <div>
            <img
              src="./public/images/twitterx.png"
              alt="facebook.png"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
