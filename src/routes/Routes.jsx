// import React from "react";
import { Routes as HardWareRoutes, Route } from "react-router";
import WelcomePage from "../pages/welcomePage/WelcomePage";
import { StartPage } from "../pages/StartPage/StartPage";
import { Login } from "../pages/login/Login";
import { Forms } from "../pages/FormsPage/Forms";
import { Register } from "../pages/register/Register";

const Routes = () => {
  return (
    <>
      <HardWareRoutes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/startPage" element={<StartPage />}></Route>
        <Route path="/iniciarSesion" element={<Login />}></Route>
        <Route path="/formulario" element={<Forms />}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </HardWareRoutes>
    </>
  );
};

export default Routes;
