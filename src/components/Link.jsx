import { Text, Link, Heading, Stack, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export const MiLink = ({ link, removeLink }) => {
  return (
    <Stack
      borderRadius="4px"
      width="300px"
      background="whiteAlpha.100"
      position="relative"
    >
      <Stack padding="20px">
        <Heading as="h2" fontSize="17px" textTransform="capitalize">
          {link?.title}
        </Heading>
        <Link href={link?.url} isExternal color="blue.200">
          {link?.url}
        </Link>
        <Text color="whiteAlpha.700">{link?.description}</Text>
        <Icon
          as={IoCloseOutline}
          position="absolute"
          right="5px"
          top="0px"
          cursor="pointer"
          onClick={() => removeLink(link.id)}
        />
      </Stack>
    </Stack>
  );
};
