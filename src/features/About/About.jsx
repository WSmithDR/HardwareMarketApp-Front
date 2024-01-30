import Footer from "../../components/footer/Footer";
import {Navbar}  from "../../components/navbar/Navbar"

export const About = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-customColor">
      <Navbar />

      <div className="flex items-center flex-col m-20 relative top-20">
        <h1 className="font-josefin text-[26px] text-center">
          Realiza Tus Compras <br />
          Con Facilidad
        </h1>
        <div className="flex items-center justify-center w-[140%]  border border-[#000000]"></div>
        <p className="font-light font-josefin text-center relative top-6 text-[19px]">
          compra productos tecnologicos <br />
          en linea con seguridad, facilidad <br />y economia
        </p>
      </div>

      <div className="flex items-center flex-col m-20 relative top-20">
        <h1 className="font-josefin text-[26px] text-center">
          Comienza A Vender <br />
          Producos Tecnologicos
        </h1>
        <div className="flex items-center justify-center w-[140%] border border-[#000000]"></div>
        <p className="font-light font-josefin text-center relative top-6 text-[19px]">
          Gestiona un negocio y comienza a <br />
          vender tus productos tecnologico <br />
          como un master
        </p>
      </div>

      <div className="flex items-center flex-col m-20 ">
        <h1 className="font-josefin text-[26px] text-center">
          Llega A Acuerdos De <br />
          Neciacion
        </h1>
        <div className="flex items-center justify-center w-[140%] border border-[#000000]"></div>
        <p className="font-light font-josefin text-center relative top-6 text-[19px] ">
          eres libre de decidir si el precio <br />
          esta alto, puedes negociar precio <br />
          con el vendedor
        </p>
      </div>

   
    <Footer/>
    </div>
  );
};
