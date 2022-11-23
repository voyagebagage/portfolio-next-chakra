import {
  IconButton,
  Text,
  VStack,
  Box,
  ButtonGroup,
  Button,
  SimpleGrid,
  HStack,
  Heading,
  ListItem,
  List,
  ListIcon,
  UnorderedList,
  Flex,
  Icon,
  Spacer,
  BreadcrumbLink,
  Breadcrumb,
} from "@chakra-ui/react";
import React from "react";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/Bs";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const About = () => {
  const SimpleList = ({ myList, icon, noIcon }) => (
    <UnorderedList>
      {myList.map((item) => (
        <List>
          <ListItem color={item.includes("UI") ? "tertiary" : null}>
            {noIcon ? null : (
              <ListIcon
                as={icon || BsIcons.BsPatchCheckFill}
                color="secondary"
              />
            )}
            {item}
          </ListItem>
        </List>
      ))}
    </UnorderedList>
  );
  {
    /* <ListIcon as={BsIcons.BsCheck2Circle} color="secondary" /> */
  }
  return (
    <VStack mt={119} w="80%" display="flex" border="2px solid red">
      <IconButton w="100%" h="100%" p={4}>
        <Text letterSpacing={2}>
          Hi, I'm Oli, web and mobile developer based in Thailand
        </Text>
      </IconButton>
      <SimpleGrid columns={2} w="100%" spacing={7} p={2}>
        <Box>
          <Text textAlign="justify">
            I'm front end / full stack developer I started programming during
            covid time, in Koh Phangan. I studied at 'Le Réacteur', to have more
            details click on stacks details, or see below.
          </Text>
        </Box>
        <Box>
          <Text textAlign="justify">
            I had my first company experience at 'Ninja partners', and
            participate to small projects here and there. I had personal life
            things to deal with and know I'm back to work
          </Text>
        </Box>
        <Box>
          <Text textAlign="justify">
            We, my wife and I, also produce music and make video clips. We also
            had a little business designing/selling clothes.
          </Text>
        </Box>
        <Box>
          <Text textAlign="justify">
            Before Asia, I was in the tourist industry. I was mostly driving
            sled dogs/husky in the north of Europe
          </Text>
        </Box>
      </SimpleGrid>
      <Heading alignSelf={"start"}>My skills as a developer</Heading>
      <HStack justify="center" w="100%">
        <Box
          display="flex"
          // justify="space-between"
          border="1px solid blue"
          borderRadius="50px 5%"
          boxSize={"md"}
          maxH="400px"
          minW="49%"
          _hover={{
            bg: "primary",
            boxShadow: "dark-lg",
            transform: "scale(1.02)",
          }}
        >
          <Flex direction="column" w="100%">
            <Heading
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="100%"
              h="20%"
              borderBottom="1px solid blue"
              borderRadius=" 30px 20px"
              gap={5}
            >
              <Icon as={SiIcons.SiJavascript} transform="rotate(-10deg)" />
              Front End
            </Heading>

            <Box
              flex="1"
              display="flex"
              justify="space-between"
              // border="1px solid green"
              alignItems="center"
              justifyContent="center"
              // h="80%"
            >
              <SimpleList
                border="1px solid blue"
                icon={BsIcons.BsPatchCheckFill}
                myList={[
                  "React",
                  "React Native w/ expo",
                  "TypeScript (beginner)",
                  "GraphQl",
                  "Amplify (AWS)",
                  "HTML",
                  "CSS",
                  "Chakra UI",
                  "Semantic UI",
                  "Material UI",
                ]}
              />
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box
          display="flex"
          border="1px solid blue"
          borderRadius="5% 50px"
          boxSize={"md"}
          maxH="400px"
          minW="49%"
          _hover={{
            bg: "primary",
            boxShadow: "dark-lg",
            transform: "scale(1.02)",
          }}
        >
          <Flex direction="column" w="100%">
            <Heading
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="100%"
              h="20%"
              borderBottom="1px solid blue"
              borderRadius="0 0 20px 30px"
            >
              Back End
            </Heading>
            <Box
              flex="1"
              display="flex"
              // border="1px solid green"
              alignItems="center"
              justifyContent="center"
            >
              <SimpleList
                border="1px solid blue"
                icon={BsIcons.BsPatchCheckFill}
                myList={[
                  "Node js",
                  "Rest APIs",
                  "Mongo DB",
                  "AWS services",
                  "Amplify (AWS)",
                ]}
              />
            </Box>
          </Flex>
        </Box>
      </HStack>
      <Heading alignSelf={"start"}>My experience</Heading>
      <Text as="sup" fontSize="xl" alignSelf={"start"} pl={40}>
        Life as a developer
      </Text>
      <HStack>
        <Heading size="lg">Le Réacteur</Heading>
        <IconButton icon={<ExternalLinkIcon />} />
      </HStack>
      <Heading size="md">What I've learnt during my bootcamp</Heading>
      <Box
        flex="1"
        display="flex"
        // border="1px solid green"
        alignItems="center"
        justifyContent="center"
      >
        <SimpleList
          border="1px solid blue"
          // noIcon
          myList={[
            "Convert a design to a website or mobile application ",
            "Create servers, APIs and secure data ",
            "Manage complex database systems",
            "Use advanced geolocation tools",
            "Authenticate users, manage online payment",
            "Create a content upload system on a server",
            "Automate tasks (scraping, sending emails, etc.) ",
            "Deploy the creations to a host",
          ]}
        />
      </Box>
      <Heading size="md">What I've done since</Heading>

      <ButtonGroup
        position="absolute"
        pos="fixed"
        p={1}
        alignItems="center"
        flexDirection="column"
        border="2px solid red"
        justify="center"
        w="10%"
        // flex="1"
        transform="translate(350%, 30%)"
      >
        <Button
          // display="flex"
          // top="100%"
          // left="50%"
          w="100%"
          // border="2px solid red"
          m={1}
          colorScheme="telegram"
        >
          Stacks
        </Button>
        <Button
          w="100%"
          m={1}
          // p={0}
          // border="2px solid red"
          colorScheme="facebook"
        >
          Bio
        </Button>
        <Button m={1} w="100%" colorScheme="messenger">
          Socials
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default About;
