import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export const LinkForm = ({
  handleTitle,
  handleUrl,
  handleDescription,
  title,
  url,
  description,
}) => {
  return (
    <FormControl width="auto">
      <Input
        borderColor="gray.700"
        placeholder="Title"
        value={title}
        onChange={({ target }) => handleTitle(target)}
      />
      <Input
        my="10px"
        borderColor="gray.700"
        placeholder="Url"
        value={url}
        onChange={({ target }) => handleUrl(target)}
      />
      <Input
        borderColor="gray.700"
        placeholder="Description"
        value={description}
        onChange={({ target }) => handleDescription(target)}
      />
    </FormControl>
  );
};
