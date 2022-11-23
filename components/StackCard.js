import React, { useEffect, useState } from "react";
import { Box, chakra, Icon, Text, Flex, Image } from "@chakra-ui/react";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";

import { items } from "./data";
import { ChakraNextImage } from "./NextImage";
import reactLogo from "../assets/reactLogo.png";
import ProfilePic from "../assets/ProfilePic.jpg";

// import { icons } from "react-icons";

// const variants = {
//   initial: { opacity: 0, scale: 1, x: -200, boxShadow: "0 0 2px 0 " },
//   animate: { opacity: 1, scale: 4.5, x: 0, boxShadow: "-0.9px 0.7px 1px 0" },
//   exit: { opacity: 0, scale: 0.5, x: 200, boxShadow: "0px 0.8px 1px 0 " },
// };

function StackCard({ index, setIndex }) {
  const StackMotionCard = chakra(motion.div);
  // const [index, setIndex] = useState(0);
  const duration = 2000;
  //   {
  //   shouldForwardProp: isValidMotionProp,
  // });

  useEffect(() => {
    // if (!isShown) {
    //   setIndex(null);
    //   // setIntermediary(false);
    // }
    const interval = setInterval(() => {
      if (index >= 5) setIndex(-1);
      setIndex((index) => index + 1);
    }, 2000);

    return () => clearInterval(interval);

    // setIndex(null);
  }, [index]);

  // console.log(isShown);
  console.log(index);
  return (
    <Flex
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
      >
        <AnimatePresence>
          <StackMotionCard
            // w={"18em"}
            // h={"18em"}
            // boxSize={isSmallerThan600 ? 320 : 340}
            boxSize={320}
            // w={"4em"}
            // h={"4em"}
            // w={isShown ? "4em" : "18em"}
            // h={isShown ? "4em" : "18em"}
            layout
            layoutId={index}
            // animate={ { opacity: [0, 1, 0], x: [0, 0, 0] } : null}
            // animate={{
            //   x: [-200, 0, 0, 0, 0, 0, 0, 160],
            //   // y: [20, 0, 0, 0, 0, 0, 0, 10],
            //   scale: [0.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 0.5],
            //   opacity: [0, 1, 1, 1, 1, 1, 1, 0],
            //   boxShadow: [
            //     "0 0 2px 0 ",
            //     "-5px 2.4px 1px 0 ",
            //     "-1px 0.7px 1px 0 ",
            //     "1px 2px 0.6px 0 ",
            //     "0px 2px 0.6px 0 ",
            //     "0px 2px 0.6px 0 ",
            //     "1px 0.7px 0.6px 0 ",
            //     "5px 2.4px 0.6px 0 ",
            //     "0 0 0 0.1",
            //     // "10px 10px 20px 5px yellow",
            //   ],
            // }}
            borderRadius={100}
            transition={{
              default: {
                duration: duration / 1000,
                type: "inertia",
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
              boxShadow: {
                duration: (duration - 1) / 1000,
                type: "inertia",
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <ChakraNextImage
              // as={
              //   // isShown?
              //   items[index]?.IconName || items[0]?.IconName
              //   // : items[0]?.IconName
              // }
              src={items[index]?.IconName || items[0]?.IconName}
              alt="ducon"
              borderRadius="full"
              flexShrink={0}
              boxSize={298}
              // w={"18em"}
              // h={"18em"}
              // w={"4em"}
              // h={"4em"}
              // w={isShown ? "4em" : "18em"}
              // h={isShown ? "4em" : "18em"}
              boxShadow={"lg"}
              // boxSize={2}
              // borderRadius={100}

              // ml={isNotSmallerSreen ? 20 : null}
            />
          </StackMotionCard>
        </AnimatePresence>
      </Flex>
      {/* <Box
        // m={1}
        width="full"
        // border="6px double"
        borderRadius={20}
        align="center"
        justify={"center"}
      >
        <Text color={items[index]?.color || null}>
          {
            // isShown ?
            items[index]?.name
            // : items[0]?.name
          }
        </Text>
      </Box> */}
    </Flex>
  );
}

export default StackCard;
