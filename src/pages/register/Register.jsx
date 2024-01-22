// import React from 'react'

// import { useFormik } from "formik";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigator = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-colorButtons">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};

          // Campo Primer nombre
          if (!values.firstName) {
            errors.firstName = "Ingresa tu nombre";
          } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]+$/.test(values.firstName)) {
            errors.firstName = "Nombre invalido";
          }

          // Campo Apellido
          if (!values.lastName) {
            errors.lastName = "Ingresa tu apellido";
          } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]+$/.test(values.lastName)) {
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
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
              values.password
            )
          ) {
            errors.password = "contrasena no valida";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
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
          <div
            className="flex flex-col justify-center items-center
           bg-customColor w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] 
           xl:w-[44%] 2xl:w-[40%] mx-auto h-[80%] sm:h-[75%] md:h-[70%] 
           lg:h-[65%] xl:h-[60%] 2xl:h-[55%] rounded-[20px]"
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center justify-center p-7">
                <h1 className=" text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-josefin">
                  Registrate
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <input
                  type="name"
                  name="firstName"
                  placeholder="Nombre"
                  className=" bg-[#C8C7C7] m-3 rounded-[10px] font-josefin p-4 w-[330px] h-[35px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-xl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                <p className="text-red-700">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>

                <input
                  type="name"
                  name="lastName"
                  placeholder="Apellido"
                  className=" bg-[#C8C7C7] m-3 rounded-[10px] font-josefin p-4 w-[330px] h-[35px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-xl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                <p className="text-red-700">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>

                <input
                  type="age"
                  name="age"
                  placeholder="Edad"
                  className=" bg-[#C8C7C7] m-3 rounded-[10px] font-josefin p-4 w-[330px] h-[35px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-xl"
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
                  className=" bg-[#C8C7C7] m-3 rounded-[10px] font-josefin p-4 w-[330px] h-[35px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-xl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="text-red-700">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  placeholder="Contrasena"
                  className=" bg-[#C8C7C7] m-3 rounded-[10px] font-josefin p-4 w-[330px] h-[35px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-xl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className="text-red-700">
                  {errors.password && touched.password && errors.password}
                </p>          

                <button
                  className="bg-colorButtons text-white w-[130px] h-[35px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-5 font-josefin shadow-xl"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Resgistrate
                </button>

                <div className="items-center flex justify-between w-[80%] h-[40px]">
                  <div className="w-[40%] border border-[#000000]"></div>
                  <div className="w-[20px] h-[20px]  border-[#000000] rounded-[100%] bg-[#000000]"></div>
                  <div className="w-[40%] border border-[#000000]"></div>
                </div>

                <div className="flex flex-row justify-center items-center">
                  <p className="font-josefin text-center">
                    Al resgistrarte, aceptas nuestras Condiciones de uso y
                    Politica de privacidad.
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <p className="flex font-josefin p-5 ">
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
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};
