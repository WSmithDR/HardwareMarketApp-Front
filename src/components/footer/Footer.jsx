const Footer = () => {
  return (
    <>
      <footer className=" h-[80px] w-[100%]  bg-colorButtons">
        <div className="flex justify-between">
          <div className="w-[50%] h-[100%]  flex flex-col justify-between text-[white] items-center">
            <p className="cursor-pointer hover:text-[#05607C]">Contacto</p>
            <p className="cursor-pointer hover:text-[#05607C] text-xs">
              57+ 3122868653
            </p>
            <p className="cursor-pointer  hover:text-[#05607C]">Empresa</p>
            <p className="cursor-pointer  hover:text-[#05607C]">
              HardWare Market
            </p>
          </div>
          <div className="w-[50%] flex justify-center items-center text-[#FFFFFF]">
            <p className="text-[#FFFFFF]">©Copyright</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
