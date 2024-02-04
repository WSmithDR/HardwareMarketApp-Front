import { useState } from "react";
import { StoreNavBar } from "../containers/StoreNavBar"
import Filters from "./Filters";
import Footer from "../../../components/footer/Footer"
import { Cart } from '../components/Cart/Cart'

export const StoreScreen = () => {

  const [cartOpen, setCartOpen] = useState(false)
  
  const handleCart = ()=> {
    setCartOpen(!cartOpen);
}

  return (
    <div className="flex flex-col  font-josefin">
      <StoreNavBar cartOpen={cartOpen} handleCart={handleCart}/>


      <div className="h-[1000px] w-[100%] flex justify-between overflow-hidden" id="div-filtros-y-productos">
        <Filters />
        <Cart cartOpen={cartOpen} handleCart={handleCart}/>
      </div>
      <Footer />
    </div>
  );
};
