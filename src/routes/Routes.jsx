import { Routes as HardWareRoutes, Route } from "react-router";
import { StartPage } from "../features/StartPage/StartPage";
import { Register } from "../features/auth/register/Register";
import { Login } from "../features/login/Login";
import { StoreScreen } from "../features/store/roots/StoreScreen";
import WelcomePage from "../features/welcomePage/WelcomePage";
import { About } from "../features/About/About";
import Contact from "../features/contact/Contact";
import { Detail } from "../features/detail/Detail";

const Routes = () => {
  return (
    <>
      <HardWareRoutes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/startPage" element={<StartPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/store" element={<StoreScreen />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </HardWareRoutes>
    </>
  );
};

export default Routes;
