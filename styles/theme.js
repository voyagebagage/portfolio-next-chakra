// 1. Import the extendTheme function
import { extendTheme, Heading } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import {
  createBreakpoints,
  mode,
  darken,
  whiten,
} from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from "./components/ButtonStyles";
import { IconButtonStyles as IconButton } from "./components/IconButtonStyles";

const fonts = {
  ...chakraTheme.fonts,
  body: "Inter",
  heading: "Inter",
};
const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
});
const colors = {
  // primaryDark: "#40CFC8",
  // primary: "#7AF2C4",
  // primary: "#5CE1E6",
  primary: { default: "#445ea7", _dark: "#29c7ac" },
  // primaryDark: "#4FF3C3",

  // primaryDark: "#4A919E",
  // primaryDark: "#29c7ac",
  secondary: { default: "#F637EC", _dark: "#E535AB" },
  // secondary: "#445ea7",
  // secondary: "#f637d9",
  // secondary: "#f722ec",
  // secondary: "#E535AB",
  // secondaryDark: "",
  tertiary: "#FF0080",
  fave4: "#F8BE65",
  // fave4: "#f77f7f",
  // fave4: "#e86848",
  modeLightBg: "#4FF3C3",
  // modeDarkBg: "#30373D",
  modeDarkBg: { _light: "#4ff3cc", default: "#30373D" },

  modeDarkText: "#bff9e8",
};
const overrides = {
  ...chakraTheme,
  config: { initialColorMode: "dark" },
  fonts,
  shadows: { ...chakraTheme.shadows, outline: "0 !important" },
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        // bg: mode("#4FF3C3", "#30373D")(props),
        bg: mode("#4ff3cc", "#30373D")(props),
        // bg: mode("#7AF2C4", "#30373D")(props),
        color: mode("#30373D", "#bff9e8")(props),
      },
      // ":root": {
      //   "--chakra-colors-primary": mode("#7C82FB", "#94d3ac")(props),
      // "--chakra-colors-primary-500": mode("#5F63FC", "#29c7ac")(props),
      // },
    }),
  },
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "48px",
    "5xl": "64px",
  },
  semanticTokens: {
    colors,
    //
    // components: {
    // IconButton: {
    //   color: {
    //     default: "red",
    //     _dark: whiten("#30373D", 37),
    //   },
    // },
    // IconButton: (props) => ({
    //   // bg: mode(darken("#4ff3cc", 10), whiten("#30373D", 37))(props),
    // }),
    // modeLight: "#30373D",
    // modeDarkBg: "#bff9e8",
    //   },
    // },
  },
  components: {
    Button,
    IconButton,
  },
};

const customTheme = extendTheme(overrides);
export default customTheme;
// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

// const theme = extendTheme({ colors });

// // 3. Pass the `theme` prop to the `ChakraProvider`
// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <App />
//     </ChakraProvider>
//   );
// }
