import { Circle, Stack } from "@chakra-ui/react";
import React from "react";
import { ArrowTriangle, SETriangle } from "./StyledIcons";

export const TriangleLogo = () => (
  <Circle
    // mr={"25%"}
    // w="20vw"
    // display="flex"
    ml={150}
    transform="translate(20%, 7%)"
    // border="2px solid yellow"
    borderRadius={"full"}
    // border={isShown ? "1px" : null}
    position="absolute"
    // size="md"
    boxSize={260} //60 before
    bg="tranparent"
    // alignSelf="flex-end"
    zIndex={-1}
    // _hover={{
    //   border: "1px double",
    //   borderColor: "primary",
    // }}
  >
    <Stack>
      <ArrowTriangle
        position="absolute"
        // boxSize={60}
        boxSize={200}
        // size="lg"
        opacity="0.06"
        // zIndx={10}
        transformOrigin="left"
        transform="translate(31%, 75%) rotate(270deg)"
        alignSelf="flex-end"
      />
      <SETriangle
        // mr={"25%"}
        boxShadow={"md"}
        // position="absolute"
        boxSize={275}
        opacity="0.04"
        alignSelf="flex-end"
        //   zIndex={0}
      ></SETriangle>
    </Stack>
    <ArrowTriangle
      //   mr={"25%"}
      zIndex={2}
      transformOrigin="left"
      transform="translate(-13%, -228%) rotate(180deg)"
      // position="relative"
      boxSize={70}
      opacity="0.08"
      alignSelf="flex-end"
      //   zIndex={0}
    />
  </Circle>
);
