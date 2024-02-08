import { Filters } from "./filters/Filters";
import { Products } from "./products/Products";
// import { useSelector } from "react-redux";

export const StoreContainer = () => {
  // const products = useSelector((state) => state.products.products);

  return (
    <div className=" h-fit   flex flex-col  min-[768px]:flex-row min-[768px]:w-[100vw]  mt-10">
      <Filters />
      <div
        className="flex w-[100vw] flex-wrap  gap-2  max-[320px]:w-[380px] -mt-96 sm:-mt-30 md:mt-5 p-10
      max-[425px]:items-center max-[425px]:justify-center min-[1000px]:justify-between max-[320px]:justify-center border-2 min-[1300px]:w-[60%] min-[1300px]:mx-auto"
      >
        {/* Contenedor de productos */}
        <Products />
      </div>
    </div>
  );
};
