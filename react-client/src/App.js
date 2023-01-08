import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Header, Form } from "./components";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <ChatBox />
      <Form />
    </ChakraProvider>
  );
}

export default App;
