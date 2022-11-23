import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
import customTheme from "../styles/theme";
// import "../styles/fds.css";

const manager = createLocalStorageManager("my-key");

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme} colorModeManager={manager}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
