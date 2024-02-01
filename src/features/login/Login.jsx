// import React from "react";
import { useNavigate } from "react-router";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
// import Footer from "../../components/footer/Footer";
import BackTo from "../../components/backTo/BackTo";
import logoFb from "../../../public/images/facebook-48.png";
import logoGoogle from "../../../public/images/google.png";
import openEye from "../../../public/images/openEye.png";
import closeEye from "../../../public/images/closedEye.png";
import { loginFetch } from "./loginUtils";
import * as userActions from "../../redux/userReducer/userActions"
import { useDispatch } from "react-redux";

export const Login = () => {
  const navigate = useNavigate();
  const [msg , setMsg] = useState("")
  const [view, setView] = useState(true);
  const dispatch = useDispatch()

  const handleView = () => {
    setView(!view);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between  bg-colorButtons  font-josefin">
      <BackTo />
      <div className="max-[425px]:w-[90%] min-[768px]:w-[50%] min-[1440px]:w-[40%] flex flex-col items-center justify-center w-4/5 h-[500px]  bg-customColor rounded-[10px] my-[20px]">
        <div className=" justify-center  items-center w-[80%] h-4/6 flex flex-col gap-10  p-2.5">
          <h1 className="text-[36px] text-center font-josefin">
            Iniciar Sesión
          </h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Campo obligatorio";
              }
              if (!values.password) {
                errors.password = "Campo obligatorio";
              } else if (
                !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(
                  values.password
                )
              ) {
                errors.password =
                  "min 8 caracteres , 1 mayuscula 1 minuscula 1 numero";
              }
              return errors;
            }}
            onSubmit={ async values => {
              const userFetch = await loginFetch(values)
              if(userFetch.status === "success"){
                const userLogin = {
                  cart : userFetch.cart,
                  user : userFetch.user
                }
               
              dispatch(userActions.userLoginAction(userLogin))
               navigate("/store")
              }else{
                setMsg(userFetch.message)
              }
             
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col w-[100%]  h-[100%]  items-center  justify-between">
                <Field
                  className="text-[17px] shadow-xl font-josefin mb-1 w-[260px] h-[35px]
                  rounded-std px-4 outline-0 bg-[#C8C7C7] md:w-[350px] md:h-[40px] "
                  placeholder="Correo electronico"
                  name="email"
                ></Field>
                {errors.email && touched.email ? (
                  <p className="text-[red]">{errors.email}</p>
                ) : null}
                <Field
                  className="text-[17px] shadow-xl font-josefin mb-1 w-[260px] h-[35px] rounded-std px-4 outline-0 bg-[#C8C7C7] md:w-[350px] md:h-[40px]"
                  placeholder="Contraseña"
                  name="password"
                  type={view ? "password" : "text"}
                ></Field>

                <div>
                  {view ? (
                    <img
                      src={closeEye}
                      alt="eyes"
                      onClick={handleView}
                      className="flex w-[20px] h-auto right-9 relative cursor-pointer"
                    />
                  ) : (
                    <img
                      src={openEye}
                      alt="pass"
                      onClick={handleView}
                      className="flex w-[20px] h-auto right-9 relative cursor-pointer"
                    />
                  )}
                  {view ? (
                    <p className="flex relative bottom-5 font-josefin">
                      Mostrar Contraseña
                    </p>
                  ) : (
                    <p className="flex relative bottom-5 font-josefin">
                      Ocultar Contraseña
                    </p>
                  )}
                </div>
                <p className="text-[red]">{msg}</p>
                {errors.password && touched.password ? (
                  <p className="text-[red]">{errors.password}</p>
                ) : null}

                {/* Boton */}
                
                  <button
                    className={`pt-1 h-[30px] w-[150px] text-white rounded-std py-2 px-4 bg-colorButtons hover:bg-colorButtons transition-colors `}
                    type="submit"
                  >
                    Iniciar Sesión
                  </button>
               
              </Form>
            )}
          </Formik>
        </div>
        {/* separadores del login lineas y circulo */}
        <div
          className="max-[425px]:w-[100%] items-center flex justify-between w-[70%] h-[40px]"
          id="separator"
        >
          <div className="w-[40%] border border-[#000000]"></div>
          <div className="w-[20px] h-[20px]  border-[#000000] rounded-[100%] bg-[#000000]"></div>
          <div className="w-[40%] border border-[#000000]"></div>
        </div>
        <div
          className="mb-8 max-[425px]:w-[100%] min-[768px]:w-[80%]  w-[50%] h-[50px] flex justify-around"
          id="logos-container"
        >
          <div className="w-fit h-[50px] flex space-x-10 md:space-x-40 items-center">
            <div className="flex items-center justify-center w-[120px] h-16 shadow cursor-pointer">
              <img className="w-[38px]" src={logoFb}></img>
              <p className="text-[#01242F]">Facebook</p>
            </div>
            <div className="flex items-center justify-center w-[120px] h-16 shadow cursor-pointer">
              <img className="w-[38px]" src={logoGoogle}></img>
              <p className="text-[#01242F]">Google</p>
            </div>
          </div>
        </div>
        <p className="text-[#01242F8F]">
          Nuevo en hardware market?
          <span
            className="text-[#05607C] cursor-pointer"
            onClick={() => navigate("/register")}
          >
            {" "}
            Registrate
          </span>{" "}
        </p>
      </div>
      {/* Footer */}
      <footer className="bg-colorButtons text-white py-4 w-full">
        <div className="container mx-auto text-center">
          <p className="font-josefin">
            &copy; 2024 Tu Empresa. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
