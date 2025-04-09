import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

import { MyCheckBox, MyTextInput, MySelect } from "../components";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik FormikAbstract</h1>

      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "debe tener 15 caracteres o menos")
            .required(),
          lastName: Yup.string()
            .max(15, "debe tener 15 caracteres o menos")
            .required(),
          email: Yup.string().email("No tiene formato valido").required(),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string()
            .required("requerido")
            .notOneOf(["it-jr"], "Esta opción no es permitida"),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <MyTextInput
              label="Firs Name"
              name="firstName"
              placeHolde="Javiers"
            />
            <MyTextInput label="Last Name" name="lastName" placeHolde="ros" />

            <MyTextInput
              label="Email adress"
              name="email"
              type="email"
              placeHolde="email@mail.com"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It senior</option>
              <option value="it-jr">It junior</option>
            </MySelect>

            <MyCheckBox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
