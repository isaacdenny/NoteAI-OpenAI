import React from "react";
import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import { Header } from "../../components";

const ChatHierarchy = () => {
  return (
    <Box
      width="full"
      height="full"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Header text="Chat Hierarchy" />
    </Box>
  );
};

export default ChatHierarchy;
