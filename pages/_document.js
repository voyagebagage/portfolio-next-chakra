import Document, { Html, Head, Main, NextScript } from "next/document";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={"system"}
            // initialColorMode={theme.config.initialColorMode}
            storageKey="my-key"
            // option={{
            //   // initialColorMode: "Dark",
            //   useSystemColorMode: true,
            // }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
