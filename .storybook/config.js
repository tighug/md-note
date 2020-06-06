import addons from "@storybook/addons";
import { addDecorator, addParameters } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import { themes } from "@storybook/theming";
import "typeface-roboto";
import "../src/renderer/index.css";

addDecorator(themeDecorator);
addParameters({
  options: {
    theme: themes.dark,
  },
});

