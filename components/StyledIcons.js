import { Circle, Icon, Text, useColorMode, Box } from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/icons";
import { mode, darken, whiten } from "@chakra-ui/theme-tools";
import Image from "next/image";

export const StyledIconGradient = (props) => {
  const iconName = props.as;
  const direction = props.to;
  let direction_hover = "";
  if (direction) if (direction === "t") direction_hover = "b";
  if (direction) if (direction === "tr") direction_hover = "bl";
  if (direction) if (direction === "tl") direction_hover = "br";
  if (direction) if (direction === "b") direction_hover = "t";
  if (direction) if (direction === "br") direction_hover = "tl";
  if (direction) if (direction === "bl") direction_hover = "tr";
  if (direction) if (direction === "l") direction_hover = "r";
  if (direction) if (direction === "r") direction_hover = "l";
  const colors = props.colors;
  darken;
  return (
    <Icon
      as={iconName}
      borderRadius="20"
      p={1.5}
      bgGradient={`linear(to-${direction || "t"},${
        colors || "blue.500,purple.400,pink.200"
      })`}
      boxSize={7}
      _hover={{
        cursor: "pointer",
        bgGradient: `linear(to-${direction_hover || "b"},${
          colors || "blue.500,purple.400,pink.200"
        })`,
        transform: "scale(1.1)",
      }}
      {...props}
    />
  );
};
export const StyledIcon = (props) => {
  // const primaryFontColor = useColorModeValue("gray.700", "gray.200");
  const { colorMode } = useColorMode();
  const iconName = props.as;
  // const isButton = props.isButton;
  return (
    <Icon
      as={iconName}
      borderRadius="20"
      p={1.5}
      boxSize={7}
      _hover={{
        bg: colorMode === "dark" ? "modeDarkText" : whiten("modeDarkBg", 10),
        color: colorMode === "dark" ? "modeDarkBg" : "modeDarkText",
        cursor: "pointer",
        transform: "scale(1.2)",
        opacity: "1",
      }}
      {...props}
    />
  );
};
export const StyledIconCirle = (props) => {
  // const primaryFontColor = useColorModeValue("gray.700", "gray.200");
  const { colorMode } = useColorMode();
  const iconName = props.as;
  return (
    <Circle
      as={iconName}
      borderRadius="20"
      p={1.5}
      size={7}
      _hover={{
        bg: colorMode === "dark" ? "modeDarkText" : whiten("modeDarkBg", 10),
        color: colorMode === "dark" ? "modeDarkBg" : "modeDarkText",
        cursor: "pointer",
        transform: "scale(1.2)",
        opacity: "1",
      }}
      {...props}
    />
  );
};
export const StyledIconText = (props) => {
  // const primaryFontColor = useColorModeValue("gray.700", "gray.200");
  const { colorMode } = useColorMode();
  return (
    <Circle
      size="7"
      letterSpacing="wide"
      _hover={{
        bg: colorMode === "dark" ? "modeDarkText" : whiten("modeDarkBg", 10),
        cursor: "pointer",
        transform: "scale(1.2)",
        opacity: "1",
      }}
      {...props}
    >
      <Text
        _hover={{
          color: colorMode === "dark" ? "modeDarkBg" : "modeDarkText",
          cursor: "pointer",
          letterSpacing: "wide",
        }}
      >
        {props.content}
      </Text>
    </Circle>
  );
};

export const ArrowTriangle = createIcon({
  displayName: "ArrowTriangle",
  viewBox: "0 0 490 490",
  d: "M33.299 245v245l423.402-245L33.299 0v245zm157.28 0h202.992L70.27 432.077 190.579 245z",
});
export const SETriangle = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    {/* displayName: "SETriangle", */}
    <path
      // className={"chakra-image"}
      fill="currentColor"
      d="m2.095 19.882 9.248-16.5a.753.753 0 0 1 1.313 0l9.248 16.5a.75.75 0 0 1-.656 1.116H2.752a.75.75 0 0 1-.657-1.116z"
    />
  </Icon>
);
export const SETriangleImage = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    {/* displayName: "SETriangle", */}
    <path
      // className={"chakra-image"}
      fill="transparent"
      d="m2.095 19.882 9.248-16.5a.753.753 0 0 1 1.313 0l9.248 16.5a.75.75 0 0 1-.656 1.116H2.752a.75.75 0 0 1-.657-1.116z"
    />
  </Icon>
);

export const IsoTriangle = createIcon({
  displayName: "IsoTriangle",
  viewBox: "0 0 511.509 511.509",
  d: "M498.675 493.845 265.16 5.568c-3.541-7.424-15.701-7.424-19.243 0L11.251 496.235c-1.579 3.307-1.344 7.189.597 10.283s5.355 4.992 9.024 4.992h469.76c5.888 0 10.667-4.779 10.667-10.667a10.6 10.6 0 0 0-2.624-6.998z",
});
export const Stacks1 = createIcon({
  displayName: "Stacks1",
  viewBox: "0 0 503.6 503.6",
  path: [
    <path
      fill="#76e83a"
      d="m459.4 373.2-208 122.4-208-122.4V130l208-122.4 208 122.4z"
    />,
    <path fill="#5ccc1b" d="M464.2 374 253.8 495.6 43.4 373.2V131.6" />,
    <path fill="#acff7b" d="M43.4 371.6V130L254.6 6.8" />,
    <path
      fill="#2f5068"
      d="M251.4 503.6c-1.6 0-2.4 0-4-.8L37.8 380.4c-2.4-1.6-2.4-4-2.4-7.2V130c0-3.2 0-5.6 2.4-7.2L248.2 1.2c2.4-1.6 4.8-1.6 8 0l209.6 121.6c2.4 1.6 2.4 4 2.4 7.2v244c0 3.2 0 5.6-2.4 7.2L254.6 502c-.8.8-1.6 1.6-3.2 1.6zm-200-134.4 200 117.6 200-117.6V134l-200-116.8L51.4 134v235.2z"
    />,
    <path fill="#b4d0d8" d="M251.4 251.6 41.8 372.4 251.4 15.6v233.6z" />,
    <path
      fill="#d2eac3"
      d="M127.4 227.6c-1.6 8-2.4 16.8-2.4 25.6 0 22.4 5.6 44 16 62.4l110.4-64V126c-32 0-60.8 12-83.2 31.2l-40.8 70.4z"
    />,
    <path
      fill="#edfce3"
      d="M251.4 126c-32 0-60.8 12-83.2 31.2l-40.8 70.4c-1.6 8-2.4 16.8-2.4 25.6 0 22.4 5.6 44 16 62.4"
    />,
    <path
      fill="#2f5068"
      d="M41.8 380.4c-2.4 0-2.4-2.4-4-4-2.4-2.4-2.4-8.8-.8-12L244.2 11.6c1.6-3.2 5.6-4.8 8.8-4s5.6 4 5.6 8v236c0 3.2-1.6 5.6-4 7.2l-208.8 120c-.8.8-2.4 1.6-4 1.6zM243.4 45.2 64.2 350l179.2-103.2V45.2z"
    />,
    <path fill="#a0b8c1" d="M251.4 251.6 461 372.4 251.4 15.6v233.6z" />,
    <path
      fill="#addb91"
      d="m251.4 251.6 110.4 64c10.4-18.4 16-39.2 16-62.4 0-8.8-.8-17.6-2.4-25.6L334.6 158c-22.4-19.2-51.2-31.2-83.2-31.2V251.6z"
    />,
    <path
      fill="#d2eac3"
      d="M361.8 315.6c10.4-18.4 16-39.2 16-62.4 0-8.8-.8-17.6-2.4-25.6L334.6 158c-22.4-19.2-51.2-31.2-83.2-31.2"
    />,
    <path
      fill="#2f5068"
      d="M461 380.4c-1.6 0-2.4 0-4-.8L247.4 258c-2.4-.8-4-4-4-6.4v-236c0-4 2.4-6.4 5.6-8 3.2-.8 7.2.8 8.8 4L465 364.4c1.6 3.2 1.6 11.2-1.6 13.6-.8 1.6-.8 2.4-2.4 2.4zM259.4 246.8 438.6 350 259.4 45.2v201.6z"
    />,
    <path fill="#678389" d="m41.8 371.6 209.6-120.8L461 371.6z" />,
    <path
      fill="#94c474"
      d="m361.8 314.8-110.4-64-110.4 64c14.4 26.4 40.8 48.8 69.6 56.8h81.6c28-8 55.2-30.4 69.6-56.8z"
    />,
    <path
      fill="#addb91"
      d="M141 314.8c14.4 26.4 44 48.8 72.8 56.8h78.4c28.8-8 55.2-30.4 70.4-56.8"
    />,
    <path
      fill="#2f5068"
      d="M461 379.6H41.8c-4 0-4-1.6-4.8-4.8-.8-3.2-2.4-7.2.8-9.6l209.6-120.8c2.4-1.6 5.6-1.6 8 0l208.8 120.8c3.2.8.8 4 .8 7.2 0 4 .8 7.2-4 7.2zm-389.6-16h359.2l-179.2-104-180 104z"
    />,
    <path
      fill="#2f5068"
      d="M251.4 380.4c-70.4 0-127.2-56.8-127.2-127.2S181 126 251.4 126s127.2 56.8 127.2 127.2-56.8 127.2-127.2 127.2zm0-238.4c-61.6 0-111.2 49.6-111.2 111.2s49.6 111.2 111.2 111.2 111.2-49.6 111.2-111.2S313 142 251.4 142z"
    />,
  ],
});
export const Stacks2 = createIcon({
  displayName: "Stacks2",
  viewBox: "0 0 503.6 503.6",
  path: [
    <path
      fill="#c3d7dd"
      d="M246.6 379.6c-5.6 0-11.2-2.4-16.8-3.2-2.4 0-4-3.2-3.2-5.6 0-2.4 2.4-4 4.8-4 4.8.8 10.4 1.6 15.2 1.6 2.4 0 4 3.2 4 5.6s-2.4 5.6-4 5.6zm16-4c-2.4 0-4-1.6-4-4s1.6-4 4-4c4.8-.8 10.4-1.6 15.2-2.4 2.4-.8 4 .8 4.8 3.2.8 2.4-.8 4-3.2 4.8-5.6.8-11.2 2.4-16.8 2.4zm-47.2-4.8h-1.6c-5.6-1.6-10.4-4-15.2-6.4-1.6-.8-3.2-3.2-1.6-5.6.8-1.6 3.2-3.2 5.6-1.6 4.8 2.4 9.6 4 14.4 5.6 2.4.8 3.2 3.2 2.4 4.8-.8 1.6-2.4 3.2-4 3.2zm78.4-2.4c-1.6 0-3.2-.8-4-2.4-.8-2.4 0-4 2.4-4.8 4.8-1.6 9.6-4 14.4-6.4 1.6-.8 4 0 5.6 1.6.8 1.6 0 4-1.6 5.6-4.8 2.4-9.6 4.8-15.2 7.2-.8-.8-1.6-.8-1.6-.8zm-107.2-11.2c-.8 0-1.6 0-2.4-.8-4.8-3.2-8.8-6.4-12.8-9.6-1.6-1.6-1.6-4-.8-5.6 1.6-1.6 4-1.6 5.6-.8l12 9.6c1.6 1.6 2.4 4 .8 5.6 0 .8-1.6 1.6-2.4 1.6zm135.2-4c-1.6 0-2.4-.8-3.2-1.6-1.6-1.6-.8-4 .8-5.6l12-9.6c1.6-1.6 4-1.6 5.6 0s1.6 4 0 5.6c-4 4-8 7.2-12.8 10.4-.8.8-1.6.8-2.4.8zm-160-17.6c-.8 0-2.4-.8-3.2-1.6-4-4-7.2-8.8-10.4-12.8-1.6-1.6-.8-4 .8-5.6s4-.8 5.6.8c3.2 4 6.4 8.8 9.6 12 1.6 1.6 1.6 4 0 5.6 0 1.6-.8 1.6-2.4 1.6zm182.4-4c-.8 0-1.6 0-2.4-.8-1.6-1.6-2.4-4-.8-5.6 3.2-4 6.4-8 8.8-12.8.8-1.6 3.2-2.4 5.6-1.6 1.6.8 2.4 3.2 1.6 5.6-3.2 4.8-5.6 9.6-9.6 13.6-.8.8-1.6 1.6-3.2 1.6zm-200-22.4c-1.6 0-3.2-.8-3.2-2.4-2.4-4.8-4.8-10.4-6.4-15.2-.8-2.4.8-4 2.4-4.8 2.4-.8 4 .8 4.8 2.4 1.6 4.8 3.2 9.6 5.6 14.4.8 1.6 0 4-1.6 5.6h-1.6zm216.8-5.6h-1.6c-2.4-.8-3.2-3.2-2.4-5.6 2.4-4.8 4-9.6 4.8-14.4.8-2.4 2.4-3.2 4.8-2.4 2.4.8 3.2 2.4 2.4 4.8-1.6 5.6-3.2 10.4-5.6 16 .8.8-.8 1.6-2.4 1.6zm-226.4-24.8c-1.6 0-3.2-1.6-4-3.2-.8-5.6-1.6-11.2-1.6-16 0-2.4 1.6-4 4-4s4 1.6 4 4c0 4.8.8 10.4 1.6 15.2 0 1.6-1.6 4-4 4zm234.4-5.6c-2.4 0-4-2.4-4-4.8.8-4.8.8-10.4.8-15.2 0-4 0-8-.8-11.2 0-2.4 1.6-4 3.2-4 2.4 0 4 1.6 4 3.2.8 4 .8 8 .8 12 0 5.6 0 11.2-.8 16.8.8 1.6-.8 3.2-3.2 3.2zm-236-25.6s-.8 0 0 0c-2.4 0-4-2.4-4-4 .8-5.6 1.6-11.2 2.4-16 .8-2.4 2.4-3.2 4.8-3.2 2.4.8 3.2 2.4 3.2 4.8-.8 4.8-1.6 10.4-2.4 15.2 0 1.6-2.4 3.2-4 3.2zm234.4-18.4c-1.6 0-3.2-1.6-4-3.2-.8-4.8-2.4-9.6-4.8-14.4-.8-2.4 0-4 2.4-4.8s4 0 4.8 2.4c1.6 4.8 4 10.4 4.8 16 .8 2.4-.8 4-3.2 4.8v-.8zm-228-12.8h-1.6c-2.4-.8-3.2-3.2-2.4-4.8 1.6-4.8 4-10.4 6.4-15.2.8-1.6 3.2-2.4 5.6-1.6 1.6.8 2.4 3.2 1.6 5.6-2.4 4.8-4.8 9.6-6.4 14.4 0 0-1.6 1.6-3.2 1.6zm216-16.8c-1.6 0-2.4-.8-3.2-2.4-2.4-4.8-5.6-8.8-8-12.8-1.6-1.6-.8-4 .8-5.6 1.6-1.6 4-.8 5.6.8 3.2 4.8 6.4 8.8 8.8 13.6.8 1.6 0 4-1.6 5.6-.8.8-1.6.8-2.4.8zm-200.8-12c-.8 0-1.6 0-2.4-.8-1.6-1.6-2.4-4-.8-5.6 3.2-4.8 6.4-8.8 10.4-12.8 1.6-1.6 4-1.6 5.6 0s1.6 4 0 5.6c-3.2 4-7.2 8-9.6 12-.8 1.6-1.6 1.6-3.2 1.6zM337 174c-.8 0-2.4-.8-3.2-1.6-3.2-4-7.2-7.2-11.2-10.4-1.6-1.6-2.4-4-.8-5.6s4-2.4 5.6-.8c4 3.2 8.8 7.2 12 11.2 1.6 1.6 1.6 4 0 5.6-.8 1.6-1.6 1.6-2.4 1.6zm-160.8-9.6c-.8 0-2.4-.8-3.2-1.6-1.6-1.6-.8-4 .8-5.6 4-3.2 8.8-6.4 13.6-9.6 1.6-.8 4-.8 5.6 1.6.8 1.6.8 4-1.6 5.6-4 3.2-8 5.6-12 8.8-.8.8-1.6.8-3.2.8zm135.2-9.6c-.8 0-1.6 0-2.4-.8-4.8-2.4-8.8-4.8-13.6-7.2-2.4-.8-3.2-3.2-2.4-5.6.8-2.4 3.2-3.2 5.6-2.4 4.8 2.4 10.4 4.8 14.4 7.2 1.6.8 2.4 3.2 1.6 5.6 0 2.4-1.6 3.2-3.2 3.2zm-108-6.4c-1.6 0-3.2-.8-4-2.4-.8-2.4 0-4 2.4-5.6 4.8-2.4 10.4-4 15.2-5.6 2.4-.8 4 .8 4.8 2.4.8 2.4-.8 4-2.4 4.8-4.8 1.6-9.6 3.2-14.4 5.6 0 .8-.8.8-1.6.8zm78.4-6.4h-.8c-4.8-1.6-10.4-2.4-15.2-3.2-2.4 0-4-2.4-3.2-4.8 0-2.4 2.4-4 4.8-3.2 5.6.8 11.2 1.6 16 3.2 2.4.8 3.2 2.4 3.2 4.8-.8 2.4-2.4 3.2-4.8 3.2zm-47.2-2.4c-1.6 0-4-1.6-4-3.2 0-2.4 1.6-3.2 3.2-4 5.6-.8 11.2-.8 16.8-.8 2.4 0 4 .8 4 3.2s-1.6 4-4 4c-5.6 0-10.4 0-16 .8z"
    />,
    <path
      fill="#50ce06"
      d="M251.4 503.6c-1.6 0-2.4 0-4-.8L37.8 380.4c-2.4-1.6-2.4-4-2.4-7.2V130c0-3.2 0-5.6 2.4-7.2L248.2 1.2c2.4-1.6 4.8-1.6 8 0l209.6 121.6c2.4 1.6 2.4 4 2.4 7.2v244c0 3.2 0 5.6-2.4 7.2L254.6 502c-.8.8-1.6 1.6-3.2 1.6zm-200-134.4 200 117.6 200-117.6V134l-200-116.8L51.4 134v235.2z"
    />,
    <path
      fill="#50ce06"
      d="M41.8 380.4c-2.4 0-.8-1.6-2.4-3.2-2.4-2.4-4-10.4-1.6-13.6l206.4-352c1.6-3.2 5.6-4.8 8.8-4s5.6 4 5.6 8v236c0 3.2-1.6 5.6-4 7.2l-208.8 120c-.8.8-2.4 1.6-4 1.6zM243.4 45.2 64.2 350l179.2-103.2V45.2z"
    />,
    <path
      fill="#50ce06"
      d="M461 380.4c-1.6 0-2.4 0-4-.8L247.4 258c-2.4-.8-4-4-4-6.4v-236c0-4 2.4-6.4 5.6-8 3.2-.8 7.2.8 8.8 4l205.6 349.6c1.6 3.2 2.4 13.6 0 16-1.6 1.6-.8 3.2-2.4 3.2zM259.4 246.8 438.6 350 259.4 45.2v201.6z"
    />,
    <path
      fill="#50ce06"
      d="M461 379.6H41.8c-4 0-.8-2.4-1.6-6.4-.8-3.2-1.6-9.6 1.6-11.2l204.8-118.4c2.4-1.6 5.6-1.6 8 0L459.4 362c3.2.8 4.8 6.4 4.8 10.4s1.6 7.2-3.2 7.2zm-389.6-16h359.2l-179.2-104-180 104z"
    />,
  ],
});
export const AWSLogo = createIcon({
  displayName: "AWSLogo",
  viewBox: "-0.1 1.1 304.9 179.8",
  path: [
    <path
      d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3L83.2 92c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5C41 1.9 46.2 1.3 51.7 1.3c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4s-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2s8.2-1.7 12.6-1.7c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6S280 5.4 281 6c1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
      fill="#252f3e"
    />,
    <g clip-rule="evenodd" fill="#f90" fill-rule="evenodd">
      ,
      <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" />
      ,
      <path d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" />
    </g>,
  ],
});
