import { Button, Heading, HStack } from "@chakra-ui/react";
import React from "react";

export const NavBar = ({ logout }) => {
  return (
    <HStack justifyContent="space-between" w="100%">
      <Heading>Mis links</Heading>
      <Button onClick={logout} colorScheme="purple">
        Log out
      </Button>
    </HStack>
  );
};
