import { Products } from "../containers/products/Products"
import { SideBar } from "../containers/sidebar/SideBar"

export const StoreScreen = () => {
  return (
    <div className="grid grid-cols-12">
      <SideBar/>
      <Products/>
    </div>
  )
}
