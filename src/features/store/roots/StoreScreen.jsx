import { useState } from "react";
// import Footer from "../../../components/footer/Footer";
import { StoreContainer } from "../containers/StoreContainer";
// import { Filters } from "../containers/filters/Filters"
import { StoreNavBar } from "../containers/navigation/StoreNavBar";
import { Cart } from "../components/Cart/Cart";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Navbar2 from "../../../components/Navbar2/Navbar2";

export const StoreScreen = () => {
  const products = useSelector((state) => state.products.products);
  const [cartOpen, setCartOpen] = useState(true);
  // const navigate = useNavigate()

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div
      className="h-[100%] justify-between min-[2300px]:h-[100%]
    flex flex-col  font-josefin relative overflow-hidden ml-3 mr-3"
    >
      <StoreNavBar handleCart={handleCart} cartOpen={cartOpen} />

      <Navbar2 />

      <div
        className={`${
          products.length ? "h-fit" : "h-[100vh]"
        }  w-[100%] flex justify-between `}
        id="div-filtros-y-productos"
      >
        <StoreContainer />
        <Cart handleCart={handleCart} cartOpen={cartOpen} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
