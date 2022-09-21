import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "../theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Container maxW="xxl" h="100%" py="10px">
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>
);
