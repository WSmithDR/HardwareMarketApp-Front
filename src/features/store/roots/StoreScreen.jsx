import { useState } from "react";
import Footer from "../../../components/footer/Footer";
import { StoreContainer } from "../containers/StoreContainer";
// import { Filters } from "../containers/filters/Filters"
import { StoreNavBar } from "../containers/navigation/StoreNavBar";
import { Cart } from "../components/Cart/Cart";

export const StoreScreen = () => {
  const [cartOpen, setCartOpen] = useState(true);

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="flex flex-col  font-josefin relative overflow-hidden">
      <StoreNavBar handleCart={handleCart} cartOpen={cartOpen} />

      <div
        className="h-[1000px] w-[100%] flex justify-between"
        id="div-filtros-y-productos"
      >
        <StoreContainer />
        <Cart handleCart={handleCart} cartOpen={cartOpen} />
      </div>
      <Footer />
    </div>
  );
};
