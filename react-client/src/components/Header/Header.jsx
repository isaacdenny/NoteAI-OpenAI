import React from "react";
import { Heading, Flex, Divider } from "@chakra-ui/react";

const Header = (props) => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="center"
        width="full"
        paddingTop="0.5rem"
        paddingBottom="0.5rem"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="sm">
            {props.text}
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
