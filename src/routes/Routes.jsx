import React from 'react'
import { Routes as HardWareRoutes, Route} from 'react-router' 
import WelcomePage from '../pages/welcomePage/WelcomePage'
import { StartPage } from '../pages/StartPage/StartPage'
import { Login } from '../pages/login/Login'
import Register from '../pages/register/Register'

const Routes = () => {
  return (
   <>
   <HardWareRoutes>
    <Route path='/' element = {<WelcomePage/>}></Route>
    <Route path= "/startPage" element = {<StartPage/>}></Route>
    <Route path= "/iniciarSesion" element = {<Login />}></Route>
    <Route path='/register' element = {<Register/>}></Route>
    <Route path='/login' element = {<Login/>}></Route>
   </HardWareRoutes>
   </>
  )
}

export default Routes;
