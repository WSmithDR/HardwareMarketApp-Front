// import React, { useState } from 'react'
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUserFetch } from './registerUtils';


export const Register = () => {
  const navigator = useNavigate();
  const [msg , setMsg] = useState()

  const  [view, setView] = useState(true);

  const handleView = () => {
    setView(
      !view
    )
    console.log(view);
    // console.log('se ve');
  }

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
          } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(values.password)) {
            errors.password = "contrasena no valida";
          }

          return errors;
        }}
        onSubmit={async(values, { setSubmitting }) => {
          const fetching = await registerUserFetch(values)
          setMsg(fetching.data.message)
          
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
                  name="first_name"
                  placeholder="Nombre"
                  className=" bg-[#C8C7C7] m-3 rounded-[10px] font-josefin p-4 w-[330px] h-[35px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-xl"
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
                  className=" bg-[#C8C7C7] m-3 rounded-[10px] font-josefin p-4 w-[330px] h-[35px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-xl"
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
                  type={view ? 'password' : 'text'}
                  name="password"
                  placeholder="Contraseña"
                  className=" bg-[#C8C7C7] m-3 rounded-[10px] font-josefin p-4 w-[330px] h-[35px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-xl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className="text-red-700">
                  {errors.password && touched.password && errors.password}
                </p>     
                
                  {
                    view ? (
                     <img src="./public/images/viewEyes.png" alt="eyes" onClick={handleView}/> 
                    ) : (
                      <img src="./public/images/password.png" alt="pass" onClick={handleView}/>
                    )
                  }
                
                <p>{msg}</p>     

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
