import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // validate,

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "debe tener 15 caracteres o menos")
        .required(),
      lastName: Yup.string()
        .max(15, "debe tener 15 caracteres o menos")
        .required(),
      email: Yup.string().email("No tiene formato valido").required(),
    }),
  });

  // console.log(values);
  return (
    <div>
      <h1>Formik YUP</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="name" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="last name"
          {...getFieldProps("lastName")}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email adress</label>
        <input type="email" placeholder="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
