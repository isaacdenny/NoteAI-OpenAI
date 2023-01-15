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
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";

const WritingArea = () => {
  const [material, setMaterial] = useState("");
  const [maxContext, setMaxContext] = useState(50);
  const [focus, setFocus] = useState("1");
  const [title, setTitle] = useState("Untitled");
  const [placeholder, setPlaceholder] = useState("");
  const [prefix, setPrefix] = useState("text");

  const handleSubmit = (event) => {};

  const autoFill = async (prompt) => {
    console.log("autofilling");
    fetch(`http://localhost:8080/promptai/autocomplete`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          setMaterial(material.split("\\gp")[0] + data.message);
        } else {
          console.log(data.error);
        }
      });
  };

  const onKeyDown = (e) => {
    if (e.key === "t" && material.endsWith("\\gp")) {
      autoFill(
        `Please add to this text titled ${title} with a focus on ${focus} ` +
          material.split("\\gp")[0].slice(-maxContext)
      );
    } else if (e.key === "/") {
      alert("not summoning");
    }
  };

  return (
    <Box textAlign="left" height="full" width="full">
      <FormLabel my={5}>{title}</FormLabel>
      <Textarea
        height="60vh"
        placeholder={placeholder}
        onChange={(event) => {
          setMaterial(event.currentTarget.value);
        }}
        value={material}
        onKeyDown={onKeyDown}
        bg="#424769"
        border="none"
        maxHeight="65vh"
      />
      <Box flexDirection="row" width="full" height="full">
        <InputGroup width="fit-content" my={5}>
          <InputLeftAddon
            bg="#F9B17A"
            children="Max Context"
            color="white"
            border="none"
          />
          <Input
            type="text"
            label="Max Context"
            id="Max Context"
            value={maxContext}
            onChange={(event) => {
              setMaxContext(event.currentTarget.value);
            }}
            bg="#424769"
            border="none"
          />
        </InputGroup>
        <InputGroup width="fit-content" my={5}>
          <InputLeftAddon
            bg="#F9B17A"
            children="Title"
            color="white"
            border="none"
          />
          <Input
            type="text"
            label="Title"
            id="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.currentTarget.value);
            }}
            bg="#424769"
            border="none"
          />
        </InputGroup>
        <RadioGroup onChange={setFocus} value={focus} width="fit-content" my={5}>
          <Stack>
            <Radio value="1">Theme</Radio>
            <Radio value="2">Diction</Radio>
            <Radio value="3">Syntax</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default WritingArea;
