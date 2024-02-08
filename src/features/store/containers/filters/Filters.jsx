import { useState } from "react";
import SwitchButton from "../../components/filter/SwitchButton";
import { useSelector } from "react-redux";
import Categories from "../../components/categories/Categories";

export const Filters = () => {
  const [hiddenFilter, setHiddenFilter] = useState(true);
  const products = useSelector((state) => state.products.products);
  const [hiddenCategories, setHiddenCategories] = useState(true);
  const handleCategories = () => {
    setHiddenCategories(!hiddenCategories);
  };

  const handleHidden = () => {
    setHiddenFilter(!hiddenFilter);
  };
  return (
    <div className=" w-[400px] h-fit flex flex-col   p-5 gap-10  ">
      <div className=" max-[425px]:w-[350px] max-[425px]:flex justify-between">
        <div>
          <h1 className="text-[20px]">Tarjetas de video</h1>
          <p>{products.length} Resultados</p>
        </div>
      </div>
      <div
        className="flex items-center   w-[100%]  h-[40px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 cursor-pointer"
        onClick={() => handleCategories()}
      >
        Categories
      </div>
      <Categories hidden={hiddenCategories} />
      <div className="bg-[#C8C7C7] h-[40px] w-[100%] rounded-[10px] flex items-center p-4 justify-between ">
        <p>Envio Gratis</p>
        <SwitchButton />
      </div>
      <p
        className="text-[blue] cursor-pointer hidden sm:flex"
        onClick={() => handleHidden()}
      >
        filtrar por precio
      </p>
      <div
        className={`w-[100%] h-[100px] flex flex-col p-4 bg-[#C8C7C7] rounded-[10px] justify-between ${
          hiddenFilter ? "hidden" : "flex"
        }`}
      >
        <p>Filtrado de precios</p>
        <div className=" h-[40px] flex justify-between">
          <select className="h-[30px] w-[60px] rounded-[10px] flex text-center">
            <option>0</option>
            <option>100</option>
            <option>500</option>
            <option>1000</option>
            <option>1500</option>
          </select>
          <div className="w-[40px] h-[20px] border-b-2 border-black"></div>
          <select className="h-[30px] w-[60px] rounded-[10px]">
            <option>100</option>
            <option>500</option>
            <option>1000</option>
            <option>1500</option>
            <option>2000</option>
          </select>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col">
        <h3 className="text-[20px]">Productos</h3>
        <p className="cursor-pointer">Nuevos</p>
        <p className="cursor-pointer">Usados</p>
      </div>
    </div>
  );
};
