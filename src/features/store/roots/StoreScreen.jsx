<<<<<<< HEAD
import { StoreNavBar } from "../containers/StoreNavBar"

export const StoreScreen = () => {
  return (
    <div className="flex flex-col justify-center">
        <StoreNavBar/>
=======
import { StoreNavBar } from "../containers/StoreNavBar";
import { Products } from "../containers/products/Products";
import { SideBar } from "../containers/sidebar/SideBar";

export const StoreScreen = () => {
  return (
    <div className="">
      <StoreNavBar />
      <SideBar />
      <Products />
>>>>>>> b6e51eaff3599826863b1f57a6a5eece1cb33d7a
    </div>
  );
};
