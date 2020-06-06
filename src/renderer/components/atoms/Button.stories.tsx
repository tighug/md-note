import React from "react";
import { withKnobs, select, boolean, color } from "@storybook/addon-knobs";
import Button from "./Button";
import Box from "./Box";
import Icon from "./Icon";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Atoms/Button",
  component: Button,
  decorators: [withKnobs],
};

export const button = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="100%"
  >
    <Button
      size={select("Size", ["xs", "sm", "md", "lg", "xl"], "md")}
      color={color("Color", "primary")}
      depressed={boolean("Depressed", false)}
      outlined={boolean("Outlined", false)}
      rounded={boolean("Rounded", false)}
      text={boolean("Text", false)}
      tile={boolean("Tile", false)}
      block={boolean("Block", false)}
      ripple={boolean("Ripple", true)}
    >
      Click Me
    </Button>
    <Box mt={20}>open knob to customize</Box>
  </Box>
);

// This is button
export const normal = () => (
  <Box display="flex" justifyContent="space-around">
    <Button>Normal</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button disabled>Disabled</Button>
  </Box>
);

export const block = () => (
  <Box
    display="flex"
    height="180px"
    flexDirection="column"
    justifyContent="space-between"
  >
    <Button block>Block</Button>
    <Button block color="primary">
      Block
    </Button>
    <Button block color="secondary">
      Block
    </Button>
    <Button block disabled>
      Block
    </Button>
  </Box>
);

export const depressed = () => (
  <Box display="flex" justifyContent="space-around">
    <Button depressed>Normal</Button>
    <Button depressed color="primary">
      Primary
    </Button>
    <Button depressed color="secondary">
      Secondary
    </Button>
    <Button depressed disabled>
      Disabled
    </Button>
  </Box>
);

export const fab = () => (
  <Box display="flex" justifyContent="space-around">
    <Button fab>
      <Icon icon={faUser} />
    </Button>
    <Button fab color="primary">
      <Icon icon={faUser} />
    </Button>
    <Button fab color="secondary">
      <Icon icon={faUser} />
    </Button>
    <Button fab disabled>
      <Icon icon={faUser} />
    </Button>
  </Box>
);

export const icon = () => (
  <Box display="flex" justifyContent="space-around">
    <Button icon>
      <Icon icon={faUser} />
    </Button>
    <Button icon color="primary">
      <Icon icon={faUser} />
    </Button>
    <Button icon color="secondary">
      <Icon icon={faUser} />
    </Button>
    <Button icon disabled>
      <Icon icon={faUser} />
    </Button>
  </Box>
);

export const withIcon = () => (
  <Box display="flex" justifyContent="space-around">
    <Button>
      <Icon icon={faUser} left />
      Normal
    </Button>
    <Button color="primary" outlined>
      <Icon icon={faUser} left />
      Primary
    </Button>
    <Button color="secondary" rounded>
      <Icon icon={faUser} left />
      Secondary
    </Button>
    <Button disabled text>
      <Icon icon={faUser} left />
      Disabled
    </Button>
  </Box>
);

export const outlined = () => (
  <Box display="flex" justifyContent="space-around">
    <Button outlined>Normal</Button>
    <Button outlined color="primary">
      Primary
    </Button>
    <Button outlined color="secondary">
      Secondary
    </Button>
    <Button outlined disabled>
      Disabled
    </Button>
  </Box>
);

export const rounded = () => (
  <Box display="flex" justifyContent="space-around">
    <Button rounded>Normal</Button>
    <Button rounded color="primary">
      Primary
    </Button>
    <Button rounded color="secondary">
      Secondary
    </Button>
    <Button rounded disabled>
      Disabled
    </Button>
  </Box>
);

export const text = () => (
  <Box display="flex" justifyContent="space-around">
    <Button text>Normal</Button>
    <Button text color="primary">
      Primary
    </Button>
    <Button text color="secondary">
      Secondary
    </Button>
    <Button text disabled>
      Disabled
    </Button>
  </Box>
);

export const tile = () => (
  <Box display="flex" justifyContent="space-around">
    <Button tile>Normal</Button>
    <Button tile color="primary">
      Primary
    </Button>
    <Button tile color="secondary">
      Secondary
    </Button>
    <Button tile disabled>
      Disabled
    </Button>
  </Box>
);
