import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }
  return errors;
};

const submitForm = (values) => {
  console.log(values);
};

const LoginForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
      <Formik
        initialValues={initialValuesLogin}
        validate={validate}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <Flex
              width="fit-content"
              height="fit-content"
              flexDirection="column"
              padding="4rem"
              justifyContent="center"
              alignItems="center"
              borderRadius="20px"
              bg="#424769"
              color="#FFFFFF"
            >
              <Flex
                marginBottom={8}
                flexDirection="column"
                alignItems="center"
              >
                <Heading as="h1" size="lg" my={0}>
                  Let's Get Started.
                </Heading>
                <Heading as="h1" size="sm" my={0}>
                  Sign in to continue.
                </Heading>
              </Flex>
              <form onSubmit={handleSubmit}>
                <Box width="full" my={2}>
                  <InputGroup>
                    <InputLeftAddon bg="#F9B17A" />
                    <Input
                      type="email"
                      label="email"
                      placeholder="Enter Email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                  </InputGroup>
                </Box>
                <Box width="full" my={2}>
                  <InputGroup size="md">
                    <InputLeftAddon bg="#F9B17A" />
                    <Input
                      type={show ? "text" : "password"}
                      label="password"
                      id="password"
                      placeholder="Enter password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password
                          ? "input-error"
                          : null
                      }
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleClick}
                        bg="transparent"
                        _hover="transparent"
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </form>
            </Flex>
          );
        }}
      </Formik>
  );
};

export default LoginForm;
