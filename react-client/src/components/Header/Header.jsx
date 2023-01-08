import React from "react";
import { Heading, Flex, Divider } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="center"
        wrap="wrap"
        paddingTop="0.5rem"
        paddingBottom="0.5rem"
        paddingLeft="10rem"
        paddingRight="10rem"
        height="4rem"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="sm">
            Message The AI
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
