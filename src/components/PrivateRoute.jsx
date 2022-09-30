import { Stack } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { useLinkContext } from "../context/LinkContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useLinkContext();

  console.log(user);

  return <Stack>{user === null ? <Navigate to="/login" /> : children}</Stack>;
};
