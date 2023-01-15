import React from "react";
import { useState, useEffect } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { Header } from "..";

const Hierarchy = () => {
  return (
    <Box
      width="full"
      height="full"
      p={5}
      overflow="hidden"
      bg="#424769"
    >
      <Header text="Chat Hierarchy" />
    </Box>
  );
};

export default Hierarchy;
