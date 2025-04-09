import React from "react";
import "../styles/styles.css";

import { Form, Formik } from "formik";
import { MyTextInput } from "../components";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register page Formik PAGE</h1>

      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener como minim 2 caracteres")
            .max(14, "El nombre no debe tener mas de 14 caracteres")
            .required("El nombre requerido"),
          email: Yup.string()
            .email("No tiene formato de email..")
            .required("El email es requerido"),
          password1: Yup.string()
            .max(6, "Password debe tener como maximo 6 caracteres")
            .required("La contraseña es requerida"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraceñas deben coincidir")
            .required("Verifica tu contranseña"),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <MyTextInput label="Name" type="text" name="name" />
            <MyTextInput label="Email" type="email" name="email" />
            <MyTextInput label="Password" type="password" name="password1" />
            <MyTextInput
              label="Repeat password"
              type="password"
              name="password2"
            />
            <button type="submit">Create</button>

            <button onClick={() => formik.resetForm()}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
