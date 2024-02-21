import { Navbar } from "../../components/navbar/Navbar";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate()
  const handleSubmit = async (data) => {
    const res = await axios.post(
      "https://hardwaremarketapp-back.onrender.com/v1/api/users/contact", data
    )
    return res
  }
  return (
    <>
      <div className="min-h-screen   flex flex-col font-josefin items-center justify-between">
        <Navbar />
        <h3 className="text-[30px] max-[425px]:text-center mt-28">Ponete en contacto con nosotros.</h3>
        <Formik
          initialValues={{ fromUser: "", fromEmail: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.fromUser) {
              errors.fromUser = "campo requerido";
            }
            if (!values.fromEmail) {
              errors.fromEmail = "campo requerido";
            }
            if (!values.message) {
              errors.message = "campo requerido";
            }
            return errors;
          }}
          onSubmit={async(values) => {
           const send =  await handleSubmit(values);
           if(send.status === 200){
            setTimeout(() => {
              navigate(`/contact-successfully/${values.fromEmail}`)
            }, 1000)
           }
          }}
        >
          {({ errors, touched }) => (
            <Form className=" flex items-center justify-center flex-col h-[500px] w-[100%] min-[1400px]:mb-32">
              <div className="flex flex-col space-y-5 justify-center h-auto w-[100%]  items-center  md:flex-row md:justify-around min-[1400px]:w-[60%] ">
                <div className="h-[60%] w-[40%]  flex flex-col  items-center space-y-2 ">
                  <Field
                    className="text-[17px] shadow-xl font-josefin mb-1 w-[260px] h-[35px] rounded-std px-4 outline-0 bg-[#C8C7C7] md:w-[350px] md:h-[40px] "
                    placeholder="Nombre"
                    name="fromUser"
                    type="text"
                  ></Field>
                  {errors.fromUser && touched.fromUser ? (
                    <p className="text-red-600">{errors.fromUser}</p>
                  ) : null}
                  <Field
                    className="text-[17px] shadow-xl font-josefin mb-1 w-[260px] h-[35px] rounded-std px-4 outline-0 bg-[#C8C7C7] md:w-[350px] md:h-[40px]"
                    placeholder="Correo"
                    name="fromEmail"
                  ></Field>
                  {errors.fromEmail && touched.fromEmail ? (
                    <p className="text-red-600">{errors.fromEmail}</p>
                  ) : null}
                </div>
                <Field
                  as="textarea"
                  className="resize-none w-[350px] h-[250px] outline-none p-2 bg-[#C8C7C7] max-[320px]:w-[300px]"
                  name="message"
                ></Field>
              </div>
              <button
                className="w-[100px] h-[30px] bg-colorButtons text-white rounded-[10px] flex items-center justify-center my-2"
                type="submit"
              >
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Contact;
