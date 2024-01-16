import React from 'react'
import { Routes as HardWareRoutes  , Route} from 'react-router' 
import WelcomePage from '../pages/welcomePage/WelcomePage'

const Routes = () => {
  return (
   <>
   <HardWareRoutes>
    <Route path='/' element = {<WelcomePage/>}></Route>
    <Route path= "/startPage" ></Route>
   </HardWareRoutes>

   </>
  )
}

export default Routes