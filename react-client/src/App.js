import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { ChatArea, ChatHierarchy, Header } from "./components";

function App() {
  return (
    <ChakraProvider>
      <Flex width="full" height="100vh" flexDirection="row">
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
          <Header text="Message The AI" />
          <ChatArea />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
