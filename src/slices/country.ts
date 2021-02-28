import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryState, Country, AppThunk, CountryHistory } from "../types";
import { customCountryPayload } from "../utils";
import { getHistorical, getStatistics } from "../api";

const initialState: CountryState = {
  status: "idle",
  error: null,
  cummulative: {},
  historical: {},
};

const fetchStart = (state: CountryState) => {
  state.status = "pending";
  state.error = null;
};

const fetchFailure = (
  state: CountryState,
  { payload }: PayloadAction<string>
) => {
  state.status = "failure";
  state.error = payload;
};

const country = createSlice({
  name: "country",
  initialState,
  reducers: {
    fetchCountryStart: fetchStart,

    fetchCountrySuccess(state, { payload }: PayloadAction<Country[]>) {
      const normalizedPayload = customCountryPayload(payload); //Customize the payload object to match province payload object

      state.status = "success";
      state.cummulative = normalizedPayload;
      state.error = null;
    },

    fetchCountryFailure: fetchFailure,

    //Historical Data
    fetchCountryHistoryStart: fetchStart,

    fetchCountryHistorySuccess(
      state,
      { payload }: PayloadAction<CountryHistory>
    ) {
      state.status = "success";
      state.historical = {
        ...state.historical,
        [payload.country]: payload.timeline,
      };
      state.error = null;
    },

    fetchCountryHistoryFailure: fetchFailure,
  },
});

export const {
  fetchCountryStart,
  fetchCountrySuccess,
  fetchCountryFailure,
  fetchCountryHistoryStart,
  fetchCountryHistorySuccess,
  fetchCountryHistoryFailure,
} = country.actions;

export default country.reducer;

/****** Thunks ******/
export const fetchCountry = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCountryStart());

    const response = await getStatistics("countries");
    dispatch(fetchCountrySuccess(response));
  } catch (error) {
    dispatch(fetchCountryFailure(error.message));
  }
};

export const fetchCountryHistory = (country: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(fetchCountryHistoryStart());

    const response = await getHistorical(country);
    dispatch(fetchCountryHistorySuccess(response));
  } catch (error) {
    dispatch(fetchCountryHistoryFailure(error.message));
  }
};
