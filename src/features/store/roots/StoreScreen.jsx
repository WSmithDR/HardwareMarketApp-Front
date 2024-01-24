import { StoreNavBar } from "../containers/StoreNavBar";
import { Products } from "../containers/products/Products";
import { SideBar } from "../containers/sidebar/SideBar";

export const StoreScreen = () => {
  return (
    <div className="">
      <StoreNavBar />
      <SideBar />
      <Products />
    </div>
  );
};
