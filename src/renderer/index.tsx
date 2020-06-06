import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import "ress";
import "typeface-roboto";
import "./index.css";

document.addEventListener("DOMContentLoaded", () =>
  render(<App />, document.getElementById("root"))
);
