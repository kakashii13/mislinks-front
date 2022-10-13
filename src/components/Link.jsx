import { Text, Link, Heading, Stack, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from "react-icons/ai";

export const MiLink = ({ link, removeLink, favLink }) => {
  return (
    <Stack
      borderRadius="4px"
      maxWidth="300px"
      height="auto"
      background="whiteAlpha.100"
    >
      <Stack padding="20px" position="relative">
        <Heading as="h2" fontSize="17px" textTransform="capitalize">
          {link?.title}
        </Heading>
        <Link href={link?.url} isExternal color="blue.200">
          {link?.url}
        </Link>
        <Text
          color="whiteAlpha.700"
          // whiteSpace="nowrap"
          // overflow="hidden"
          // textOverflow="ellipsis"
        >
          {link?.description}
        </Text>
        <Text>{link?.category}</Text>
        <Icon
          as={AiOutlineDelete}
          color="red.500"
          position="absolute"
          right="5px"
          top="0px"
          cursor="pointer"
          onClick={() => removeLink(link?.id)}
        />
        <Icon
          as={link?.fav ? AiFillStar : AiOutlineStar}
          position="absolute"
          right="30px"
          top="0px"
          cursor="pointer"
          onClick={() => favLink(link?.id)}
        />
      </Stack>
    </Stack>
  );
};
