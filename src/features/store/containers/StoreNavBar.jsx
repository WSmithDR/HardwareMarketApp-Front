export const StoreNavBar = () => {
  return (
    <nav className="bg-colorButtons p-4 m-2 rounded-[10px] ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo o nombre de la empresa */}
        <div className="text-white font-bold text-lg p-3">
          <img
            src="./public/images/H.png"
            alt="logo"
            className="w-10 h-10 cursor-pointer"
          />
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Buscar"
            className="h-8 
              rounded-l-lg w-72 p-2 font-josefin
              "
          />
          <div
            className="h-8 
              rounded-r-lg w-10 p-2 font-josefin bg-colorBlueStar1
              "
          >
            <img
              src="./public/images/isearch.png"
              alt="search"
              className="flex items-center justify-center -m-1"
            />
          </div>
        </div>

        {/* Enlaces de navegación */}
        <div className="flex space-x-7">
          <a
            href=""
            className="font-josefin text-colorBlueStar1 flex flex-col-reverse relative right-4 text-lg"
          >
            <img
              src="./public/images/carFast.png"
              alt="carShoop"
              className="h-9 w-9 p-0 relative right-3 bottom-2"
            />
            20
          </a>
        </div>
      </div>
    </nav>
  );
};
