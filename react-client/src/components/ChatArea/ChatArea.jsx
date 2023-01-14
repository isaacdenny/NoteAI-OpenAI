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
  Textarea,
} from "@chakra-ui/react";

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const [answered, setAnswered] = useState(true);
  const [mode, setMode] = useState("text");
  const [chatLog, setChatLog] = useState([
    {
      user: "user",
      mode: "Hello",
      message: "World!",
    },
  ]);

  const handleSubmit = (event) => {
    if (message) {
      event.preventDefault();
      setChatLog([...chatLog, { user: "user", mode: mode, message: message }]);
      setAnswered(false);
    }
  };

  useEffect(() => {
    if (answered) return;
    const requestBody = {
      user: chatLog[chatLog.length - 1].user,
      mode: chatLog[chatLog.length - 1].mode,
      message: chatLog[chatLog.length - 1].message,
    };
    fetch(`http://localhost:8080/prompai/notes`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setChatLog([
          ...chatLog,
          { user: data.user, mode: data.mode, message: data.message },
        ]);
        setAnswered(true);
      })
      .catch((error) => console.error(error));
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
        <Header text="Notes" />
        {[
          ...chatLog.map((logEntry, index) => {
            return logEntry.user === "gpt" ? (
              <Chat key={index.toString()}>
                {logEntry.message}
              </Chat>
            ) : (
              <div key={index.toString()} />
            );
          }),
        ]}
        {/* add chatlog component */}
      </Box>
      <Box my={4} textAlign="left">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Doc Query</FormLabel>
            <Textarea
              minHeight={150}
              maxHeight="fit-content"
              overflowY="scroll"
              placeholder={"Put your notes here!"}
              onChange={(event) => {
                setMessage(event.currentTarget.value);
              }}
            />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Get Notes!
          </Button>
          <RadioGroup onChange={setMode} value={mode}>
            <Stack direction="row">
              <Radio value="text">Text</Radio>
              <Radio value="book">Book</Radio>
              <Radio value="chapter">Chapter</Radio>
              <Radio value="article">Article</Radio>
            </Stack>
          </RadioGroup>
        </form>
      </Box>
    </Flex>
  );
};

export default ChatArea;
