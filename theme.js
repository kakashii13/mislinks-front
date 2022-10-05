import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, #root, body": {
        // background: "gray.800",
        // color: "white",
        height: "100%",
      },
    },
  },
});
