import { Navbar } from "../../components/navbar/Navbar";
import { Formik, Field, Form } from "formik";

const Contact = () => {
  return (
    <>
      <div className="h-[100vh]   flex flex-col font-josefin items-center justify-between">
        <Navbar />
        <h3 className="text-[30px]">Ponete en contacto con nosotros.</h3>
        <Formik
          initialValues={{ name: "", email: "", texto: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "campo requerido";
            }
            if (!values.email) {
              errors.email = "campo requerido";
            }
            if (!values.texto) {
              errors.texto = "campo requerido";
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-[50%] h-[400px] flex flex-col justify-between items-center my-5">
              <div className="flex   justify-between h-[100%] w-[100%]  items-center ">
                <div className="h-[50%] w-[40%]  flex justify-around flex-col">
                  <Field
                    className="rounded-[10px] outline-none w-[100%] bg-[#C8C7C7] p-1"
                    placeholder="Nombre"
                    name="name"
                    type="text"
                  ></Field>
                  {errors.name && touched.name ? (
                    <p className="text-red-600">{errors.name}</p>
                  ) : null}
                  <Field
                    className="rounded-[10px] w-[100%] outline-none bg-[#C8C7C7] p-1"
                    placeholder="Email"
                    name="email"
                  ></Field>
                  {errors.email && touched.email ? (
                    <p className="text-red-600">{errors.email}</p>
                  ) : null}
                </div>
                <Field
                  as="textarea"
                  className="resize-none w-[350px] h-[250px] outline-none p-2 bg-[#C8C7C7]"
                  name="texto"
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
