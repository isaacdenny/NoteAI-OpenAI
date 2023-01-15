import React from "react";
import { Flex } from "@chakra-ui/react";
import { Hierarchy, WritingArea } from "../components";

const DashBoard = () => {
  return (
    <Flex width="full" minHeight="100vh" flexDirection="row" bg="#2D3250" color="white" overflow="none">
      <Flex
        width={250}
        height="full"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Hierarchy />
      </Flex>
      <Flex
        width="full"
        height="full"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingLeft="50px"
        paddingRight="50px"
        paddingTop="20px"
      >
        <WritingArea />
      </Flex>
    </Flex>
  );
};

export default DashBoard;
