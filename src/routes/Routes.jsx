import React from 'react'
import { Routes as HardWareRoutes, Route} from 'react-router' 
import WelcomePage from '../pages/welcomePage/WelcomePage'
import { StartPage } from '../pages/StartPage/StartPage'

const Routes = () => {
  return (
   <>
   <HardWareRoutes>
    <Route path='/' element = {<WelcomePage/>}></Route>
    <Route path= "/startPage" element = {<StartPage/>}></Route>
   </HardWareRoutes>
   </>
  )
}

export default Routes