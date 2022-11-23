import {
  Button,
  HStack,
  VStack,
  Stack,
  Spacer,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { Component } from "react";
import { useState } from "react";
import { ExPro } from "../components/ExPro";
import { Projects } from "../components/Projects";
import Stacks from "../components/Stacks";
import { UiExp } from "../components/uiExp";

function DevRoute({ isShown, setIsShown }) {
  const [index, setIndex] = useState(0);

  const stacks = ["S", "T", "A", "C", "K", "S"];
  const projects = ["P", "R", "O", "J", "E", "C", "T", "S"];
  const uiExp = [
    "U",
    "I",
    "",
    "E",
    "X",
    "P",
    "E",
    "R",
    "I",
    "E",
    "N",
    "C",
    "E",
  ];
  const expPro = ["Exp", "Pro"];
  const devDisplay = [
    { name: stacks, component: <Stacks /> },
    { name: uiExp, component: <UiExp /> },
    { name: projects, component: <Projects /> },
    { name: expPro, component: <ExPro /> },
  ];
  const variants = {
    enter: { opacity: [1, 1], translateY: [50, 0], color: "red" },
  };
  const handleClickPrevious = () => {
    setIndex(index - 1);
    if (index <= 0) setIndex(3);
  };
  const handleClickNext = () => {
    setIndex(index + 1);
    if (index >= 3) setIndex(0);
  };

  return (
    <>
      <Flex
        align="center"
        border="1px solid violet"
        flexDirection={"column"}
        // width="full"
      >
        <HStack
          boxSize="md"
          // flexDirection={"column"}
          justify="space-evenly"
          border="1px solid yellow"
          spacing={"60px"}
          // align="center"
          width="full"
        >
          <Spacer />
          <Button onClick={handleClickPrevious}>Prev</Button>
          {/* <Spacer /> */}
          {devDisplay[index]?.name.map((letter, j) => (
            <Box
              as={motion.div}
              layout
              border="3px solid yellow"
              width="20"
              height="20"
              // whiteSpace="nowrap"
              // size={"sm"}
              // height={20}
              // animate="enter"
              // variants={variants}
              // animate={{ translateY: 20 }}
              bg="red"
              bgPosition={"bottom"}
              whileTap={{ scale: 0.8 }}
              whileHover={{ backgroundPositionY: "50px" }}
              bgRepeat="no-repeat"
              // initial={{ translateY: 20 }}
              // whileHover={(_after = { content: '"coucou"' })}
              // _after={{
              //   position: "absolute",
              //   width: "60px",
              //   height: "5%",
              //   bg: "red",
              //   // whileTap: { scale: 0.8 },
              //   // opacity: "0.6",
              // }}
              //  "enter"
              // _after={{ content: '"coucou"' }}
              bgColor="text"
              // bgClip="text"
              transition="backgroundPositionY 1s linear"
              key={j}
            >
              <Text
                as="div"
                // position={"absolute"}
                // as={motion.div}
                fontSize="5xl"
                // transform="translateY(-50%)"
                // initial={{ y: 0 }}
                // bg="transparent"
                // bgClip="text"
              >
                {letter}
              </Text>
            </Box>
          ))}
          {/* <Spacer /> */}
          <Button onClick={handleClickNext}>Next</Button>
          <Spacer />
        </HStack>
        <HStack border="1px solid olive">{devDisplay[index]?.component}</HStack>
      </Flex>
    </>
  );
}

export default DevRoute;
