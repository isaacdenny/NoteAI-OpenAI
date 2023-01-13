import React from 'react'
import { Flex } from '@chakra-ui/react';

const Chat = (props) => {
  return (
    <Flex
      width="full"
      p={3}
      my={2}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={'lightgray'}
      whiteSpace="pre"
    >
      {props.children}
    </Flex>
  );
}

export default Chat