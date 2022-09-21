import { Text, Link, Heading, Stack, Button } from "@chakra-ui/react";
import React from "react";

export const MiLink = ({ link, removeLink }) => {
  return (
    <Stack
      padding="10px"
      borderRadius="4px"
      width="300px"
      background="whiteAlpha.100"
    >
      <Heading as="h2" fontSize="17px" textTransform="capitalize">
        {link?.title}
      </Heading>
      <Link href={link?.url} isExternal color="blue.200">
        {link?.url}
      </Link>
      <Text color="whiteAlpha.700">{link?.description}</Text>
      <Button
        width="50px"
        colorScheme="purple"
        onClick={() => removeLink(link.id)}
      >
        del
      </Button>
    </Stack>
  );
};
