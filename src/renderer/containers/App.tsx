import React from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../theme/dark/default";
import store from "../store";
import EditorPage from "../components/pages/EditorPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <EditorPage />
      </Provider>
    </ThemeProvider>
  );
}

export default hot(App);
