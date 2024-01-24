// import React, { useState } from 'react'
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUserFetch } from "./registerUtils";

export const Register = () => {
  const navigator = useNavigate();
  const [msg, setMsg] = useState();

  const [view, setView] = useState(true);

  const handleView = () => {
    setView(!view);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-colorButtons">
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
          } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]+$/.test(values.first_name)) {
            errors.first_name = "Nombre invalido";
          }

          // Campo Apellido
          if (!values.last_name) {
            errors.last_name = "Ingresa tu apellido";
          } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]+$/.test(values.last_name)) {
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
        onSubmit={async (values, { setSubmitting }) => {
          const fetching = await registerUserFetch(values);
          setMsg(fetching.data.message);

          setTimeout(() => {
            setSubmitting(false);
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
          <div className="max-[425px]:w-[90%] min-[768px]:w-[50%] min-[1440px]:w-[40%] flex flex-col items-center justify-center w-4/5 h-[590px]  bg-customColor rounded-[10px]">
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col w-[100%]  h-[100%]  items-center  justify-around"
            >
              <div className="flex flex-col items-center justify-center p-7">
                <h1 className="text-[36px] text-center font-josefin">
                  Registrate
                </h1>
              </div>
              <div className="justify-center items-center w-[80%] flex flex-col gap-2 m-0">
                <input
                  type="name"
                  name="first_name"
                  placeholder="Nombre"
                  className="shadow-lg max-[425px]:w-[100%] min-[768px]:w-[70%] min-[1440px]:w-[400px] font-josefin w-[50%] h-[37px] bg-[#C8C7C7] px-2 text-[16px] rounded-[10px] text-[#01242F] outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />

                <p className="text-red-700">
                  {errors.first_name && touched.first_name && errors.first_name}
                </p>

                <input
                  type="name"
                  name="last_name"
                  placeholder="Apellido"
                  className="shadow-lg max-[425px]:w-[100%] min-[768px]:w-[70%] min-[1440px]:w-[400px] font-josefin w-[50%] h-[37px] bg-[#C8C7C7] px-2 text-[16px] rounded-[10px] text-[#01242F] outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                <p className="text-red-700">
                  {errors.last_name && touched.last_name && errors.last_name}
                </p>

                <input
                  type="age"
                  name="age"
                  placeholder="Edad"
                  className="shadow-lg max-[425px]:w-[100%] min-[768px]:w-[70%] min-[1440px]:w-[400px] font-josefin w-[50%] h-[37px] bg-[#C8C7C7] px-2 text-[16px] rounded-[10px] text-[#01242F] outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                <p className="text-red-700">
                  {errors.age && touched.age && errors.age}
                </p>

                <input
                  type="email"
                  name="email"
                  placeholder="Correo electronico"
                  className="max-[425px]:w-[100%] min-[768px]:w-[70%] min-[1440px]:w-[400px] font-josefin w-[50%] h-[37px] shadow-lg bg-[#C8C7C7] px-2 text-[16px] rounded-[10px] text-[#01242F] outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="text-red-700">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type={view ? "password" : "text"}
                  name="password"
                  placeholder="Contraseña"
                  className="shadow-lg max-[425px]:w-[100%] min-[768px]:w-[70%] min-[1440px]:w-[400px] font-josefin w-[50%] h-[37px] bg-[#C8C7C7] px-2 text-[16px] rounded-[10px] text-[#01242F] outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                <div>
                  {view ? (
                    <img
                      src="./public/images/closedEye.png"
                      alt="eyes"
                      onClick={handleView}
                      className="flex w-[20px] h-auto right-9 relative cursor-pointer"
                    />
                  ) : (
                    <img
                      src="
                      ./public/images/openEye.png"
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

                <p className="text-red-700">
                  {errors.password && touched.password && errors.password}
                </p>

                <p>{msg}</p>

                <button
                  className="bg-colorButtons h-[30px] w-32 text-stone-100 text-[17px] font-josefin cursor-pointer"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Resgistrate
                </button>
              </div>
            </Form>
            <div className="items-center flex justify-between w-[80%] h-[40px] relative top-4">
              <div className="w-[40%] border border-[#000000]"></div>
              <div className="w-[20px] h-[20px]  border-[#000000] rounded-[100%] bg-[#000000]"></div>
              <div className="w-[40%] border border-[#000000]"></div>
            </div>

            <div className="flex flex-row justify-center items-center">
              <p className="font-josefin text-center relative top-6">
                Al resgistrarte, aceptas nuestras Condiciones de uso y Politica
                de privacidad.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="flex font-josefin p-5 relative top-2 ">
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
        )}
      </Formik>
    </div>
  );
};
