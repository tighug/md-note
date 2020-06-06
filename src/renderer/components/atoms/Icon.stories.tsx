import React from "react";
import { withKnobs, select, color } from "@storybook/addon-knobs";
import Icon from "./Icon";
import Box from "./Box";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Atoms/Icon",
  component: Icon,
  decorators: [withKnobs],
};

export const icon = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    bgColor="transparent"
    height="100%"
  >
    <Icon
      icon={faUser}
      iconSize={select("Size", ["xs", "sm", "md", "lg", "xl"], "md")}
      color={color("Color", "primary")}
    />
    <Box bgColor="transparent" mt={20}>
      open knob to customize
    </Box>
  </Box>
);
