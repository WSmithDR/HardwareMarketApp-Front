// import React, { useState } from 'react'
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUserFetch } from "./registerUtils";
import BackTo from "../../../components/backTo/BackTo";
// import BackTo from "../../../components/backTo/BackTo";
// import Footer from "../../../components/footer/Footer";

export const Register = () => {
  const navigator = useNavigate();
  const [msg, setMsg] = useState();

  const [view, setView] = useState(true);

  const handleView = () => {
    setView(!view);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-between  bg-colorButtons  font-josefin ">
        <BackTo />
        <div
          className="flex items-center flex-col justify-center bg-customColor h-auto p-5 w-[90%] rounded-std m-20 md:h-auto md:w-[800px]
         md:p-6 md:mt-4"
        >
          <h1 className="text-center font-josefin text-4xl pb-10">
            Registrate
          </h1>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              age: "",
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};

              // Campo Primer nombre
              if (!values.first_name) {
                errors.first_name = "Ingresa tu nombre";
              } else if (
                !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]+$/.test(values.first_name)
              ) {
                errors.first_name = "Nombre invalido";
              }

              // Campo Apellido
              if (!values.last_name) {
                errors.last_name = "Ingresa tu apellido";
              } else if (
                !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]+$/.test(values.last_name)
              ) {
                errors.lastName = "Apellido invalido";
              }

              //Campo edad
              if (!values.age) {
                errors.age = "Ingresa tu edad";
              } else if (!/^[1-9]\d*$/.test(values.age)) {
                errors.age = "Edad invalida";
              }

              // Campo email
              if (!values.email) {
                errors.email = "Ingresa tu correo";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Correo electronigo invalido";
              }

              // Campo password
              if (!values.password) {
                errors.password = "Ingresa una contrasena";
              } else if (
                !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(
                  values.password
                )
              ) {
                errors.password = "contrasena no valida";
              }

              return errors;
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const fetching = await registerUserFetch(values);
              setMsg(fetching.data.message);

              setTimeout(() => {
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center flex-col "
              >
                <input
                  className="text-[17px] shadow-xl font-josefin mb-1 w-[260px] h-[35px] rounded-std px-4 outline-0 bg-[#C8C7C7] md:w-[350px] md:h-[40px]"
                  type="name"
                  name="first_name"
                  placeholder="Nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
                <p className="text-[red] mb-2">
                  {errors.first_name && touched.first_name && errors.first_name}
                </p>

                <input
                  className="text-[17px] shadow-xl font-josefin mb-1 w-[260px] h-[35px] rounded-std px-4 outline-0 bg-[#C8C7C7] md:w-[350px] md:h-[40px]"
                  type="name"
                  name="last_name"
                  placeholder="Apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                <p className="text-[red] mb-2 ">
                  {errors.last_name && touched.last_name && errors.last_name}
                </p>

                <input
                  className="text-[17px] shadow-xl font-josefin mb-1 w-[260px] h-[35px] rounded-std px-4 outline-0 bg-[#C8C7C7] md:w-[350px] md:h-[40px]"
                  type="age"
                  name="age"
                  placeholder="Edad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                <p className="text-[red] mb-2">
                  {errors.age && touched.age && errors.age}
                </p>

                <input
                  className="text-[17px] shadow-xl font-josefin mb-1 w-[260px] h-[35px] rounded-std px-4 outline-0 bg-[#C8C7C7] md:w-[350px] md:h-[40px]"
                  type="email"
                  name="email"
                  placeholder="Correo electronico"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="text-[red] mb-2">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  className="text-[17px] shadow-xl font-josefin mb-1 w-[260px] h-[35px] rounded-std px-4 outline-0 bg-[#C8C7C7] md:w-[350px] md:h-[40px]"
                  type={view ? "password" : "text"}
                  name="password"
                  placeholder="Contraseña"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                <div className="flex items-center justify-center space-x-3 mb-2">
                  {view ? (
                    <img
                      src={closeEye}
                      alt="eyes"
                      onClick={handleView}
                      className="flex w-[20px] h-auto cursor-pointer"
                    />
                  ) : (
                    <img
                      src={openEye}
                      alt="pass"
                      onClick={handleView}
                      className="flex w-[20px] h-auto cursor-pointer"
                    />
                  )}
                  {view ? (
                    <p className="flex font-josefin">Mostrar Contraseña</p>
                  ) : (
                    <p className="flex font-josefin">Ocultar Contraseña</p>
                  )}
                </div>

                {/* Mensaje de error para la contrasena */}
                <p className="text-[red] mb-5">
                  {errors.password && touched.password && errors.password}
                </p>

                <p className="text-center text-colorStar mb-1">{msg}</p>

                <button
                  className="bg-colorButtons font-josefin h-[30px] w-[150px] 
                  pb-2  text-white rounded-[10px] cursor-pointer
                  pt-1 md:w-[150px]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Registrate
                </button>
              </form>
            )}
          </Formik>

          {/* Texto de politica y privacidad de datos */}
          <div className="flex flex-col justify-center items-center relative bottom-[-10px] m-2">
            {/* Barras separadoras */}
            <div className="items-center flex justify-between w-[80%] h-[40px] space-x-8 ">
              <div className="w-[200%] border border-[#000000]"></div>
              <div className="w-[100px] h-[20px] border-[#000000] rounded-[150%] bg-[#000000]"></div>
              <div className="w-[200%] border border-[#000000]"></div>
            </div>

            <p className="font-josefin text-center">
              Al resgistrarte, aceptas nuestras Condiciones de uso y Politica de
              privacidad.
            </p>
            <p className="flex font-josefin mt-3">
              Ya tienes una cuenta?
              <span
                className="relative left-2 text-[#05607C] cursor-pointer"
                onClick={() => navigator("/login")}
              >
                Iniciar Sesion
              </span>
            </p>
          </div>
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
    </>
  );
};
