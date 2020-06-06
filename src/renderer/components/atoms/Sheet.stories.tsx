import React from "react";
import Sheet from "./Sheet";
import Box from "./Box";
export default {
  title: "Atoms/Sheet",
  component: Sheet,
};

export const sheet = () => (
  <Box textAlign="center">
    <Sheet>This is sheet.</Sheet>
  </Box>
);

// TODO: Other stories
