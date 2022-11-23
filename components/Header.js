import React from "react";
import NextLink from "next/link";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  ButtonGroup,
  Text,
  Spacer,
  Heading,
  IconButton,
  useColorMode,
  Menu,
  Link,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  StyledIcon,
  StyledIconCirle,
  StyledIconGradient,
  StyledIconText,
} from "../components/StyledIcons";
import * as BsIcons from "react-icons/bs";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};
function Header(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { path } = props;
  return (
    <Flex
      p={5}
      w="100%"
      h="8%"
      align="center"
      position="fixed"
      css={{ backdropFilter: "blur(15px)" }}
      zIndex={2}
    >
      <Heading mt={1} size="md">
        bonjour moi c'est Olivier F.
      </Heading>
      <Menu isLazy w="10%" p={0} m={0}>
        <ButtonGroup ml={6} h="250%" mt={-10}>
          {/* <MenuList> */}
          <MenuItem as={Link} w="40%" p={0} m={0}>
            <IconButton
              as={LinkItem}
              href="/personalLife"
              w="100%"
              m={0}
              p={0}
              _hover={{ h: "90%" }}
              _focus={{ h: "90%" }}
              _active={{ h: "100%" }}
            >
              <Text letterSpacing={2}>Work</Text>
            </IconButton>
          </MenuItem>
          {/* <Spacer /> */}
          <MenuItem as={Link} w="40%" p={0} m={0}>
            <IconButton
              w="100%"
              m={0}
              p={0}
              _hover={{ h: "90%" }}
              _focus={{ h: "90%" }}
              _active={{ h: "100%" }}
            >
              <Text
                as={LinkItem}
                href="/personalLife"
                path={path}
                letterSpacing={2}
              >
                Life
              </Text>
            </IconButton>
          </MenuItem>
          <MenuItem as={Link} w="40%" p={0} m={0}>
            <IconButton
              w="100%"
              m={0}
              p={0}
              _hover={{ h: "90%" }}
              _focus={{ h: "90%" }}
              _active={{ h: "100%" }}
            >
              <Text letterSpacing={2}>Blog</Text>
            </IconButton>
          </MenuItem>
          {/* </MenuList> */}
        </ButtonGroup>
      </Menu>
      <Spacer />
      {/* <IconButton
        icon={<BsIcons.BsGithub />}
        _bg="blue"
        // bg="blue"
        // _light={{ bg: "olive" }}
        // _dark={{ bg: "default" }}
      /> */}
      <StyledIcon
        mt={1}
        as={BsIcons.BsWhatsapp}
        opacity=".9"
        // _hover={{ opacity: "1" }}
      />
      <StyledIconCirle mt={1} as={BsIcons.BsGithub} ml={2.5} opacity=".9" />
      <StyledIconText mt={1} content="3D" ml={2.5} opacity=".9" />
      <StyledIconGradient
        mt={1}
        onClick={toggleColorMode}
        ml={6}
        to="r"
        as={colorMode === "light" ? "Dark" && MoonIcon : "Light" && SunIcon}
        zIndex="sticky"
      />
    </Flex>
  );
}

export default Header;
