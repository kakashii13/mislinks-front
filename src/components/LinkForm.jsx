import { FormControl, Input, Select } from "@chakra-ui/react";
import React from "react";
import { INITAL_CATEGORIES } from "../Helpers";

export const LinkForm = ({
  handleTitle,
  handleUrl,
  handleDescription,
  handleCategory,
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
      <Select
        mt="10px"
        placeholder="Category"
        onChange={({ target }) => handleCategory(target)}
      >
        {INITAL_CATEGORIES.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
