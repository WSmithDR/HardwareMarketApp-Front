import { Field, Form, Formik , ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-colorButtons  font-josefin ">
      <div className="max-[425px]:w-[90%] min-[768px]:w-[50%] min-[1440px]:w-[40%] flex flex-col items-center justify-center w-4/5 h-[500px]  bg-customColor rounded-[10px]">
        <div className=" justify-center  items-center w-[80%] h-4/6 flex flex-col gap-10  p-2.5 ">
          <h1 className="text-[36px] text-center font-josefin">
            Iniciar Sesión
          </h1>
        <Formik
          initialValues={{email : "" , password : ""}}
          validate={values =>{
            const errors = {}
            if(!values.email){
              errors.email = "Campo obligatorio"
            }
            if(!values.password){
              errors.password = "Campo obligatorio"
            }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(values.password)){
              errors.password = "min 8 caracteres , 1 mayuscula 1 minuscula 1 numero"
            }
            return errors
            
          } }
          onSubmit={values => {
            console.log(values)
          }}
        >
        {({errors , touched}) => (
           <Form className="flex flex-col w-[100%]  h-[100%]  items-center  justify-around">
           <Field
             className="max-[425px]:w-[100%] min-[768px]:w-[70%] min-[1440px]:w-[400px] w-[50%] h-[37px] bg-[#C8C7C7] px-2 text-[16px] rounded-[10px] text-[#01242F]  outline-none  "
             placeholder="Telefono/Nombre de usuario/Correo"
             name = "email"
           ></Field>
            {errors.email && touched.email ? (
              <p className="text-[red]">{errors.email}</p>
            ) : (null)}
           <Field
             className="max-[425px]:w-[100%]  min-[768px]:w-[70%]  w-[50%] min-[1440px]:w-[400px]  h-[37px] bg-[#C8C7C7] px-2 text-[16px] rounded-[10px] text-[#01242F] outline-none "
             placeholder="Contraseña"
             name = "password"
             type = "password"
         
           ></Field>
           {errors.password && touched.password ? (
            <p className="text-[red]">{errors.password}</p>
           ) : (null)}
           <button className="bg-colorButtons h-[30px] w-32 text-stone-100 text-[17px]" type="submit">
             Iniciar Sesion
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
          <div className="w-fit h-[50px]  flex justify-between items-center cursor-pointer">
            <img
              className="w-[48px]"
              src="/public/images/facebook-48.png"
            ></img>
            <p className="text-[#01242F]">Facebook</p>
          </div>
          <div className="w-fit h-[50px]  flex justify-between items-center cursor-pointer">
            <img className="w-[48px]" src="/public/images/google.png"></img>
            <p className="text-[#01242F]">Google</p>
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
    </div>
  );
};
