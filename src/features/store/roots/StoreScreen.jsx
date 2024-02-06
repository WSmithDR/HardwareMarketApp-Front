import { useState } from "react";
import Footer from "../../../components/footer/Footer";
import { StoreContainer } from "../containers/StoreContainer";
// import { Filters } from "../containers/filters/Filters"
import { StoreNavBar } from "../containers/navigation/StoreNavBar";
import { Cart } from "../components/Cart/Cart";
import { useSelector } from "react-redux";

export const StoreScreen = () => {
  const products = useSelector((state) => state.products.products);
  const [cartOpen, setCartOpen] = useState(true);

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="h-[100%] justify-between min-[2300px]:h-screen flex flex-col  font-josefin relative overflow-hidden ">
      <StoreNavBar handleCart={handleCart} cartOpen={cartOpen} />

      <div
        className={`${
          products.length ? "h-fit" : "h-[100vh]"
        }  w-[100%] flex justify-between `}
        id="div-filtros-y-productos"
      >
        <StoreContainer />
        <Cart handleCart={handleCart} cartOpen={cartOpen} />
      </div>
      <Footer />
    </div>
  );
};
