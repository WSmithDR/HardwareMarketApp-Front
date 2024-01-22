import { Routes as HardWareRoutes, Route } from "react-router";
import { StartPage } from "../features/StartPage/StartPage";
import { Login } from "../features/login/Login";
import { Register } from "../features/register/Register";
import WelcomePage from "../features/welcomePage/WelcomePage";

const Routes = () => {
  return (
   <>
   <HardWareRoutes>
    <Route path='/' element = {<WelcomePage/>}></Route>
    <Route path= "/startPage" element = {<StartPage/>}></Route>
    <Route path='/register' element = {<Register/>}></Route>
    <Route path='/login' element = {<Login/>}></Route>
   </HardWareRoutes>
   </>
  )
}

export default Routes;
