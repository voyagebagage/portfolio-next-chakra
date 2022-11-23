import React from "react";

import { Button, Flex, VStack, useColorMode } from "@chakra-ui/react";

import { SETriangle } from "../components/StyledIcons";
import ProfileHeader from "./ProfileHeader";

import DevRoute from "./DevRoute";
import LifeRoute from "./personalLife";
import { useState, useRef } from "react";
import { useAnimationControls } from "framer-motion";
import About from "../components/About";
import Header from "../components/Header";

export default function Index() {
  const [choice, setChoice] = useState("");
  // const [isShown, setIsShown] = useState(false);

  const routeRef = useRef(null);
  // const { ref: routeChoice } = useAnimationControls();
  const goToRouteRef = (myRouteRef) =>
    myRouteRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <VStack>
      <Header />
      <Flex
        direction={"column"}
        align="center"
        // border="1px solid cyan"
        // flex={1}
        // justifyContent="center"
        width="65%"
      >
        <ProfileHeader
          style={{ transform: 'translate("-50%, 50%")' }}
          border="1px solid yellow"
        />
        <About />
      </Flex>
    </VStack>
  );
}

{
  /* <RouteChoice
          w="100%"
          ref={routeChoice}
          setChoice={setChoice}
          choice={choice}
          forwardedRef={routeRef}
          isShown={isShown}
          setIsShown={setIsShown}
          goToRouteRef={(routeRef) => goToRouteRef(routeRef)}
        /> */
}

// <>
//   {choice === "devRoute" ? (
//     <div ref={routeRef}>
//       <DevRoute />
//     </div>
//   ) : choice === "lifeRoute" ? (
//     <div ref={routeRef}>
//       <LifeRoute /> <Button variant="primary">bite1</Button>
//       <Button variant="secondary" ml="4">
//         bite 2
//       </Button>
//       <Button variant="outline" ml="4">
//         bite 3
//       </Button>
//       <Button variant="tertiary" ml="4">
//         bite 4
//       </Button>
//       <Button variant="fave4" ml="4">
//         bite 5
//       </Button>
//       <SETriangle
//         // isround="true"
//         boxSize={80}
//         color="red"
//       />
//     </div>
//   ) : null}
// </>
