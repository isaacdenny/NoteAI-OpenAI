import React from 'react'
import { Box } from '@chakra-ui/react';

const Chat = (props) => {
  return (
    <Box
      width="full"
      p={3}
      my={2}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={'darkgray'}
    >
      {props.children}
    </Box>
  );
}

export default Chat