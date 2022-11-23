import {
  Box,
  HStack,
  Text,
  Icon,
  Stack,
  useMediaQuery,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import StackCard from "../components/StackCard";
import { items } from "../components/data";

function RouteChoice({
  setChoice,
  choice,
  goToRouteRef,
  forwardedRef,
  isShown,
  setIsShown,
}) {
  // props.executeScroll
  const [isNotSmallerSreen] = useMediaQuery("(min-width:600px)");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    goToRouteRef(forwardedRef);
  }, [choice]);
  console.log(isShown);

  return (
    <HStack
      w="100%"
      align="center"
      justify="space-evenly"
      // flex={1}
      // spacing={30}
      border="5px solid olive"
      // mt={isNotSmallerSreen ? -120 : null}
      onMouseEnter={() => {
        setIsShown(true);
        setChoice("");
      }}
      onMouseLeave={() => setIsShown(false)}
    >
      {/* <Flex
        w="40%"
        direction={"column"}
        align="center"
        justify={"center"}

        // border="6px double"
      >
        <Flex
          // border="10px double"
          boxSize={"xs"}
          borderRadius={40}
          align="center"
          justify={"center"}
          width="full"
        > */}
      {/* <StackCard
        index={index}
        setIndex={setIndex}
        isShown={isShown}
        setIsShown={setIsShown}
      /> */}
      {/* </Flex>
        <Box
          m={1}
          width="full"
          // border="6px double"
          borderRadius={20}
          align="center"
          justify={"center"}
        >
          <Text m={2}>
            {isShown ? items[index]?.name || items[0]?.name : items[0]?.name}
          </Text>
        </Box> */}
      {/* </Flex> */}
      {/* <Icon
          as={SiIcons.SiReact}
          boxSize="sm"
          ml={isNotSmallerSreen ? 20 : null}
          // mt={isNotSmallerSreen ? -120 : null}
        />
        <Icon
          as={GrIcons.GrNode}
          boxSize="sm"
          ml={isNotSmallerSreen ? 20 : null}
          // mt={isNotSmallerSreen ? -120 : null}
        /> */}
      {/* </Box> */}

      {/* {isShown && ( */}
      <HStack
        p={2}
        align="center"
        justifyContent="space-between"
        // gap={10}
        spacing={49}
        opacity={isShown ? 1 : 0}
        border="1px solid pink"
        // justifyContent="space-evenly"
      >
        <Button value={"devRoute"} onClick={(e) => setChoice(e.target.value)}>
          Life as a developper
        </Button>
        {/* <Spacer /> */}
        <Button value={"lifeRoute"} onClick={(e) => setChoice(e.target.value)}>
          Life in Before
        </Button>
      </HStack>
    </HStack>
  );
}

export default RouteChoice;
