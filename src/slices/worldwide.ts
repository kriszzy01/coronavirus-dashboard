import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWorldWide, getAllHistorical } from "../api";

import { AppThunk, WorldWide, HistoricalAll, WorldwideState } from "../types";

const initialState: WorldwideState = {
  status: "idle",
  error: null,
  cummulative: {
    active: 0,
    affectedCountries: 0,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
    recovered: 0,
    deaths: 0,
    updated: 0,
    cases: 0,
    confirmed: 0,
  },
  historical: {
    cases: {},
    deaths: {},
    recovered: {},
  },
};

const fetchStart = (state: WorldwideState) => {
  state.status = "pending";
  state.error = null;
};

const fetchFailure = (
  state: WorldwideState,
  { payload }: PayloadAction<string>
) => {
  state.status = "failure";
  state.error = payload;
};

const statistics = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    fetchWorldWideStart: fetchStart,

    fetchWorldWideSuccess(state, { payload }: PayloadAction<WorldWide>) {
      state.status = "success";
      state.cummulative = payload;
      state.error = null;
    },

    fetchWorldWideFailure: fetchFailure,

    /***** Historical Statistics Reducers*****/
    fetchAllHistoricalStart: fetchStart,

    fetchAllHistoricalSuccess(
      state,
      { payload }: PayloadAction<HistoricalAll>
    ) {
      state.status = "success";
      state.historical = payload;
      state.error = null;
    },

    fetchAllHistoricalFailure: fetchFailure,
  },
});

export const {
  fetchWorldWideFailure,
  fetchWorldWideStart,
  fetchWorldWideSuccess,
  fetchAllHistoricalStart,
  fetchAllHistoricalSuccess,
  fetchAllHistoricalFailure,
} = statistics.actions; //Action Creators

export default statistics.reducer; //Statistics Reducer

/****** Thunks ******/
export const fetchWorldWide = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchWorldWideStart());

    const response = await getWorldWide();
    dispatch(fetchWorldWideSuccess(response));
  } catch (error) {
    dispatch(fetchWorldWideFailure(error.message));
  }
};

export const fetchHistoricalAll = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchAllHistoricalStart());

    const response = await getAllHistorical();
    dispatch(fetchAllHistoricalSuccess(response));
  } catch (error) {
    dispatch(fetchAllHistoricalFailure(error.message));
  }
};
