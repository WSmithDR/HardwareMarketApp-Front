import { Products } from "./products/Products"
import { SideBar } from "./sidebar/SideBar"

export const StoreContainer = () =>{
    return(
        <div className="grid grid-cols-12 p-3 m-2">
            <SideBar/>
            <Products/>
        </div>
    )
}