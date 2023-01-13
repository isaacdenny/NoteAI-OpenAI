import React from 'react'
import {
  Flex,
} from "chakra-ui/react"
import { ChatHierarchy, ChatArea } from '../components';

const DashBoard = () => {
  return (
    <Flex
      width="full"
      height="100vh"
      flexDirection="row"
      paddingLeft={150}
      paddingRight={150}
    >
      <Flex
        width={250}
        height="full"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <ChatHierarchy />
      </Flex>
      <Flex
        width="full"
        height="full"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <ChatArea />
      </Flex>
    </Flex>
  );
}

export default DashBoard