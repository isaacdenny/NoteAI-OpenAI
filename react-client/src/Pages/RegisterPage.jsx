import React from 'react'

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const RegisterPage = () => {
  return (
    <div>RegisterPage</div>
  )
}

export default RegisterPage