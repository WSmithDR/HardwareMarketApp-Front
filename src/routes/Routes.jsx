import { Routes as HardWareRoutes, Route } from "react-router";
import { StartPage } from "../features/StartPage/StartPage";
import { Register } from "../features/auth/register/Register";
import { Login } from "../features/login/Login";
import { StoreScreen } from "../features/store/roots/StoreScreen";
import WelcomePage from "../features/welcomePage/WelcomePage";
import { About } from "../features/About/About";
import { StoreScreen } from "../features/store/roots/StoreScreen";

const Routes = () => {
  return (
   <>
   <HardWareRoutes>
    <Route path='/' element = {<WelcomePage/>}></Route>
    <Route path= "/startPage" element = {<StartPage/>}></Route>
    <Route path='/register' element = {<Register/>}></Route>
    <Route path='/login' element = {<Login/>}></Route>
<<<<<<< HEAD
    <Route path="/about" element={<About/>} ></Route>
    <Route path="/tienda" element={<StoreScreen/>}></Route>
=======
    <Route path='/store' element = {<StoreScreen/>}></Route>
>>>>>>> ac351f60ff1d2a9c544415e0153ea3627675d10c
   </HardWareRoutes>
   </>
  )
}

export default Routes;
