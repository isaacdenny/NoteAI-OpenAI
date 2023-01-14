import { Flex } from "@chakra-ui/react"
import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Flex
      width="full"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bg="#2D3250"
    >
      <LoginForm />
    </Flex>
  );
};

export default LoginPage;
