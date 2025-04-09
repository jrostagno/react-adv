import { Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  // console.log(values);
  return (
    <div>
      <h1>Formik FormikComponents</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component={"span"} />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component={"span"} />

            <label htmlFor="email">Email adress</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component={"span"} />

            <label htmlFor="email">JobType</label>
            <Field name="jobType" as="select">
              <option value="">pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It senior</option>
              <option value="it-jr">It junior</option>
            </Field>
            <ErrorMessage name="jobType" component={"span"} />
            <label htmlFor="terms">
              Terms and conditions
              <Field name="terms" type="checkbox" />
            </label>
            <ErrorMessage name="terms" component={"span"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
