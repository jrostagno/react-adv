import React, { FormEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { onChange, formData, resetForm } = useForm({
    name: "javier",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <h1>Register page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password1"
          value={formData.password1}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="repeat password"
          name="password2"
          value={formData.password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
        <button onClick={resetForm} type="button">
          Reset
        </button>
      </form>
    </div>
  );
};
