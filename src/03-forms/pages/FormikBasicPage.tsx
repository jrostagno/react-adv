import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length > 15) {
      errors.firstName = "Must be at least 15 or less";
    }

    if (!lastName) {
      errors.lastName = "Required";
    } else if (lastName.length > 10) {
      errors.lastName = "Must be at least 10 or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

  // console.log(values);
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="name"
          name="firstName"
          value={values.firstName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          value={values.lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email adress</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
