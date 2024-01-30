import { Products } from "./products/Products";
import { SideBar } from "./sidebar/SideBar";

export const StoreContainer = () => {
  return (
    <div className="grid grid-cols-12">
      <SideBar className="col-[1/3] grid justify-center" />
      <Products className="col-[3/e]" />
    </div>
  );
};
