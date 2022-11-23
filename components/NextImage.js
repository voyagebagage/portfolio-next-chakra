import * as React from "react";
import {
  chakra,
  Box,
  Image as ChakraImage,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

export const ChakraNextImage = (props) => {
  const { src, alt, ...rest } = props;
  return (
    <Box position="relative" {...rest} overflow="hidden">
      <Image layout="fill" objectFit="cover" src={src} alt={alt} />
    </Box>
  );
};

// const NextChakraImage = chakra(Image, {
//   shouldForwardProp: (prop) =>
//     ["src", "alt", "layout", "objectFit"].includes(prop),
// });
