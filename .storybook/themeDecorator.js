import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../src/renderer/theme/dark/default";

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
