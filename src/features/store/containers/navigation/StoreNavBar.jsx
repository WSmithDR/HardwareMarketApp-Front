export const StoreNavBar = () => {
  return (
    <nav className="bg-colorButtons p-3 m-2 rounded-[10px]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo o nombre de la empresa */}
        <div className="text-white font-bold text-lg p-3">
          <a href="/startPage">
            <img
              src="./public/images/H.png"
              alt="logo"
              className="w-10 h-10 cursor-pointer"
            />
          </a>
        </div>

        <div className="flex relative right-22">
          <input
            type="text"
            placeholder="Buscar"
            className="h-9
              rounded-l-lg w-96 p-4 font-josefin bg-[#E8E1E1] text-black outline-none"
          />
          <div
            className="h-9 
              rounded-r-lg w-14 p-2 font-josefin bg-colorStar
              cursor-pointer flex items-center justify-center
              "
          >
            <img
              src="./public/images/isearch.png"
              alt="search"
              className="w-6"
            />
          </div>
        </div>

        {/* Enlaces de navegación */}
        <div>
          <a
            href=""
            className="font-josefin text-[#E8E1E1] font-bold text-lg relative left-11 cursor-pointer 
            hover:text-gray-400 "
          >
            Categorias
          </a>
        </div>

        <div>
          <a
            href=""
            className="font-josefin text-[#E8E1E1] font-bold text-lg relative left-11 cursor-pointer 
            hover:text-gray-400 "
          >
            Favoritos
          </a>
        </div>

        <div className="flex space-x-7">
          <a
            href=""
            className="font-josefin text-colorStar flex flex-col-reverse relative right-1 text-mx"
          >
            <img
              src="./public/images/carFast.png"
              alt="carShoop"
              className="h-7 w-7 p-0 relative right-2 bottom-2"
            />
            20
          </a>
        </div>
      </div>
    </nav>
  );
};
