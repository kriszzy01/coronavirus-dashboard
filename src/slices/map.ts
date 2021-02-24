import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activeData: "Cummulative",
  targetData: "Global",
};

const map = createSlice({
  name: "mapData",
  initialState,
  reducers: {
    setMapData(state, { payload }: PayloadAction<string>) {
      state.activeData = payload;
    },
    setTargetData(state, { payload }: PayloadAction<string>) {
      state.targetData = payload;
    },
  },
});

export const { setMapData, setTargetData } = map.actions;

export default map.reducer;
