import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { activeData: "Cummulative Cases" };

const map = createSlice({
  name: "mapData",
  initialState,
  reducers: {
    setMapData(state, { payload }: PayloadAction<string>) {
      state.activeData = payload;
    },
  },
});

export const { setMapData } = map.actions;

export default map.reducer;
