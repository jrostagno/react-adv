import React from "react";
import formJason from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJason) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value,
        `el valor minimo es ${(rule as any).value}`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("revise el formato del email");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });
export const DinamicForm = () => {
  return (
    <div>
      <h1>Dinamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJason.map((element) => {
              if (
                element.type === "input" ||
                element.type === "email" ||
                element.type === "password"
              ) {
                return (
                  <MyTextInput
                    key={element.name}
                    type={element.type as any}
                    name={element.name}
                    label={element.label}
                    placeholder={element.placeholder}
                  />
                );
              } else if (element.type === "select") {
                return (
                  <MySelect
                    key={element.name}
                    type={element.type as any}
                    name={element.name}
                    label={element.label}
                  >
                    {element?.options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
