import { Heading, HStack, Link, Stack } from "@chakra-ui/react";
import React from "react";

export const FavLinks = ({ links }) => {
  const favlinks = links.filter((link) => link.fav);
  return (
    <Stack>
      <Heading>Favs</Heading>
      {favlinks.map((link) => (
        <HStack key={link?.id}>
          <p>{link?.title}</p>
          <Link color="blue.200">{link?.url}</Link>
        </HStack>
      ))}
    </Stack>
  );
};
