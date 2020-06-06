import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { remote } from "electron";
import Store from "electron-store";

const { dialog } = remote;
const store = new Store();

export const openDir = createAsyncThunk("workspace/openDir", async () => {
  const workspace = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });
  const selected = workspace && workspace.filePaths[0];

  return selected ? workspace.filePaths[0] : "";
});

const slice = createSlice({
  name: "workspace",
  initialState: {
    dirPath: store.get("workspace.dirPath"),
    filePath: store.get("workspace.filePath"),
  },
  reducers: {
    setFile: (state, action) => {
      const filePath = action.payload;

      state.filePath = filePath;
      store.set("workspace.filePath", filePath);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(openDir.fulfilled, (state, action) => {
      const dirPath = action.payload;

      state.dirPath = dirPath;
      store.set("workspace.dirPath", dirPath);
    });
  },
});

export const { setFile } = slice.actions;

export default slice.reducer;
