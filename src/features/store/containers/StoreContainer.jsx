import { Products } from "./products/Products";
import { SideBar } from "./sidebar/SideBar";

export const StoreContainer = () => {
  return (
    <div className="grid grid-cols-12 p-5">
      <SideBar />
      <Products />
    </div>
  );
};
