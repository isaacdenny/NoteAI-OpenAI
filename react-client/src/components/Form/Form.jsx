import React from "react";
import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { Header } from "../../components";

const Form = () => {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const postPrompt = async () => {
    setChatLog(...(chatLog + message));
    const response = await fetch(`http://localhost:8000/promptai/${message}`, {
      method: "POST",
      mode: "cors",
      // body: JSON.stringify(message), // body data type must match "Content-Type" header
    });
    const aiResponse = await response.json();
    setChatLog(...(chatLog + aiResponse));
    console.log(aiResponse);
    alert(aiResponse.message);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postPrompt();
  };

  return (
    <Box
      width="full"
      height="full"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Header text="Message The AI"/>
      <Box my={4} textAlign="left">
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Input
              placeholder="What is 1984?"
              onChange={(event) => setMessage(event.currentTarget.value)}
            />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
