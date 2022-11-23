import React, { useState } from "react";
import { darken, whiten } from "@chakra-ui/theme-tools";
// import Link from "next/link";
import NextLink from "next/link";
import {
  Flex,
  Link,
  Stack,
  Box,
  useColorMode,
  useMediaQuery,
  HStack,
  chakra,
  Text,
  Heading,
  Circle,
  Button,
  Spacer,
  VStack,
  Badge,
  ButtonGroup,
} from "@chakra-ui/react";
// import { Image as ChakraImage } from "@chakra-ui/react";

import ProfilePic from "../assets/ProfilePic.jpg";
import { ChakraNextImage } from "../components/NextImage";
import { items } from "../components/data";

import profileHeader from "../content/profileHeader.json";
import { motion, motionConfig } from "framer-motion";
import StackCard from "../components/StackCard";
import { TriangleLogo } from "../components/TriangleLogo";
function ProfileHeader() {
  const MotionButton = motion(Button);
  const [isSmallerThan600] = useMediaQuery("(min-width:600px)");
  const [isLargerThan1280] = useMediaQuery("(min-width:1280px)");
  const { colorMode } = useColorMode();
  const [isShown, setIsShown] = useState(false);
  const [index, setIndex] = useState(0);

  const isDark = colorMode === "dark";

  //   const StyledLink = styled(Link)`
  //     text-decoration: none;

  //     &:focus, &:hover, &:visited, &:link, &:active {
  //         text-decoration: none;
  //     }
  // `;

  // export default (props) => <StyledLink {...props} />;
  return (
    <Stack
      // transform="translate(10%, 0%)"
      // pr={!isSmallerThan600 ? 0 : 99}
      // ml={20}
      // mb={isSmallerThan600 ? -120 : null}
      // border="5px solid red"
      width="100%"
      // minWidth="100%"
      // minWidth="max-content"
      // maxH={430}
      // border={"1px solid red"}
      // mt={"10%"}
      mt={120}
      // height="100%"
      // align={"center"}
      // justify="space-between"
    >
      {/* //------------------------------ */}
      {/* //------------------------------ */}
      <Flex
        direction={isSmallerThan600 ? "row" : "column"}
        // border="5px solid cyan"
        width="100%"
        // mt={0}
        // position="static"
        minWidth="max-content"
        // alignItems="start"
        // gap="4"
        // align="center"
        // justify={"space-around"}
        // gap="10%"
        // spacing="20px"
        // p={!isSmallerThan600 ? "32" : "0"}
        // flex="1"
        // border="1px solid yellow"
      >
        <Box
          // mt={-1.5}
          mt={"-6%"}
          // w="35em"
          // h="37em"
          // pt={-40}
          // border="1px solid yellow"
          // mt={isSmallerThan600 ? "0" : "16"}
          align="center"
          // border={"1px solid red"}
          // spacing="100px"
          // gap="20px"
          // ml={20}
        >
          {/* <Text
            textAlign="start"
            // border="1px solid violet"
            fontSize="2xl"
            fontWeight="semibold"
          >
            {profileHeader.welcome}
          </Text> */}
          <Heading
            noOfLines={1}
            fontSize="5xl"
            fontWeight="bold"
            bgGradient={`linear(to-r, ${
              items[index]?.color || items[0]?.color
            },#4ff3cc)`}
            // bgGradient={"linear(to-r, blue.500,purple.400,pink.200)"}
            bgClip="text"
            // mr={2}
          >
            Welcome
            {/* {profileHeader.name} */}
          </Heading>
          <HStack mb={2}>
            <Text
              as="div"
              display={"flex"}
              textAlign="start"
              // border="1px solid violet"
              fontSize="2xl"
              fontWeight="semibold"
              // justify={"space-around"}
            >
              My Stacks :
            </Text>
            {(items[index]?.name || items[0]?.name) && (
              <Text
                ml={4}
                as="div"
                display={"flex"}
                color={items[index]?.color}
                textAlign="center"
                alignSelf={"center"}
                // border="1px solid violet"
                fontSize="xl"
                fontWeight={"normal"}
              >
                {items[index]?.name
                  ? items[index]?.name
                  : items[index]?.name === items[0]?.name
                  ? items[0]?.name
                  : null}
              </Text>
            )}
          </HStack>
          <StackCard
            index={index}
            setIndex={setIndex}
            // isShown={isShown}
            // setIsShown={setIsShown}
            // border="1px solid violet"
          />
          {/* <Text>{profileHeader.profile}</Text> */}
          <ButtonGroup isAttached mt={4}>
            <MotionButton
              // mt={4}
              // transform="translateY(55%)"
              // {...motionConfig}
              // as={motion.button}
              // initial={{ backgroundColor: "red" }}
              // initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                color: ["#fff", "#4ff3cc"],
                backgroundColor: [items[index]?.color, "#565C60"],
                // backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
              }}
              whileTap={{ scale: 0.8 }}
              whileHover={{
                scale: 1.1,
                color: ["#fff", "#bff9e8"],
                backgroundColor: [items[index]?.color, "#565C60"],
                transition: {
                  backgroundColor: {
                    duration: 0.7,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                  color: {
                    duration: 0.7,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                },
              }}
              // transition="scale 0.5s linear"
              transition={{
                backgroundColor: {
                  duration: 2,
                  ease: "easeIn",
                  repeat: Infinity,
                  repeatType: "loop",
                },
                color: {
                  duration: 2,
                  ease: "easeIn",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              w="65%"
              // size="lg"
              // oppositeColor
            >
              <NextLink
                href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
                passHref
              >
                <Link
                  pl={3}
                  pr={3}
                  target="_blank"
                  rel="noopener noreferrer"
                  as="samp"
                  _hover={{ textDecoration: "none" }}
                  size="sm"
                  // w="100%"
                >
                  Let&apos;s Talk
                </Link>
              </NextLink>
            </MotionButton>
            <MotionButton
              // oppositeColor
              whileTap={{ scale: 0.8 }}
              whileHover={{
                scale: 1.1,
              }}
              // color={items[index]?.color}
            >
              CV
            </MotionButton>
          </ButtonGroup>
        </Box>
        <Spacer
          maxW="15%"
          // border="1px solid yellow"
        />
        <Box
          // border="10px solid green"
          position={"relative"}
          display="flex"
          w="40%"
          // justify="center"
          // align="center"
        >
          <ChakraNextImage
            // display="flex"
            mr={"8%"}
            // border="10px solid blue"
            src={ProfilePic}
            alt={"ProfilePic"}
            borderRadius="full"
            flexShrink={0}
            // transform="translate(50%, 50%)"
            mt={isSmallerThan600 ? "0" : "12"}
            mb={isSmallerThan600 ? "0" : "12"}
            alignSelf="center"
            // justifySelf="center"
            boxSize={isSmallerThan600 ? 320 : 340}
            // boxSize={60}
            //
            boxShadow={isSmallerThan600 ? "xs" : "dark-lg"}
            border={isSmallerThan600 && isDark ? "10px solid" : "4px solid"}
            borderColor={isSmallerThan600 ? "modeDarkBg" : "primary"}
            // spacing="28px"
            // display="inline-block"
            _hover={{ boxShadow: isSmallerThan600 ? "lg" : "dark-lg" }}
            // onMouseEnter={() => setIsShown(true)}
            // onMouseLeave={() => setIsShown(false)}
          />
          <TriangleLogo />
        </Box>
      </Flex>
    </Stack>
  );
}

export default ProfileHeader;
