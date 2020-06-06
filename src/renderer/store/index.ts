import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import workspaceReducer from "./workspace";

const reducer = combineReducers({
  workspace: workspaceReducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;
export default store;
