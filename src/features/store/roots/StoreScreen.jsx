import { Navbar } from "../../../components/Navbar"

export const StoreScreen = () => {
  return (
    <div>
        <Navbar/>
        <Products merchandising={merchandising}></Products>
    </div>
  )
}
