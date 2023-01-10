import React from "react";
import { useState, useEffect } from "react";
import Chat from "../Chat/Chat";
import Header from "../Header/Header";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const [answered, setAnswered] = useState(true)
  const [language, setLanguage] = useState("Python");
  const [chatLog, setChatLog] = useState([
    // {
    //   language: "Hello",
    //   message: "World!",
    // },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog([...chatLog, { language: language, message: message }]);
    setAnswered(false)
  };

  useEffect(() => {
    if (answered) return;
    async function postPrompt() {
      const lang = chatLog[chatLog.length - 1].language;
      const mes = chatLog[chatLog.length - 1].message;
      const response = await fetch(
        `http://localhost:8000/promptai/${lang}/${mes}`,
        {
          method: "POST",
          mode: "cors",
        }
      );
      const aiResponse = await response.json();
      if (aiResponse) {
        setChatLog([
          ...chatLog,
          { language: language, message: aiResponse.message },
        ]);
        setAnswered(true)
      }
    }
    postPrompt();
  }, [answered]);

  return (
    <Flex
      width="full"
      height="full"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      flexDirection="column"
    >
      <Box
        width="full"
        height="full"
        p={5}
        borderWidth="1px"
        borderRadius="lg"
        overflowY="scroll"
      >
        <Header text="Chat Log" />
        {[
          ...chatLog?.map((logEntry, index) => (
            <Chat key={index.toString()}>{logEntry.message.toString()}</Chat>
          )),
        ]}
        {/* add chatlog component */}
      </Box>
      <Box my={4} textAlign="left">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Doc Query</FormLabel>
            <Input
              placeholder="What is a module?"
              onChange={(event) => {
                setMessage(event.currentTarget.value)
              }}
            />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Send Message
          </Button>
          <RadioGroup onChange={setLanguage} value={language}>
            <Stack direction="row">
              <Radio value="Python">Python</Radio>
              <Radio value="JavaScript">JavaScript</Radio>
              <Radio value="C Sharp">C#</Radio>
            </Stack>
          </RadioGroup>
        </form>
      </Box>
    </Flex>
  );
};

export default ChatArea;
