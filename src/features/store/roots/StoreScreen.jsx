import { StoreNavBar } from "../containers/StoreNavBar"
import Filters from "./Filters";
import Footer from "../../../components/footer/Footer"

export const StoreScreen = () => {
  return (
    <div className="flex flex-col  font-josefin">
        <StoreNavBar/>
  
      
    <div className="h-[1000px] w-[100%] flex justify-between" id="div-filtros-y-productos">
    <Filters/>
    </div>
   <Footer/>
    </div>
  );
};
