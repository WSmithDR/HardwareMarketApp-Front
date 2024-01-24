<<<<<<< HEAD
import { StoreNavBar } from "../containers/StoreNavBar"

export const StoreScreen = () => {
  return (
    <div className="flex flex-col justify-center">
        <StoreNavBar/>
=======
import { Products } from "../containers/products/Products"
import { SideBar } from "../containers/sidebar/SideBar"

export const StoreScreen = () => {
  return (
    <div className="grid grid-cols-12">
      <SideBar/>
      <Products/>
>>>>>>> ac351f60ff1d2a9c544415e0153ea3627675d10c
    </div>
  )
}
