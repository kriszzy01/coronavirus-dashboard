import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryState, Country, AppThunk } from "../types";
import { customCountryPayload } from "../utils";
import { getCountries } from "../api";

const initialState: CountryState = {
  status: "idle",
  error: null,
  cummulative: {},
  historical: {},
};

const country = createSlice({
  name: "country",
  initialState,
  reducers: {
    fetchCountryStart(state) {
      state.status = "pending";
      state.error = null;
    },

    fetchCountrySuccess(state, { payload }: PayloadAction<Country[]>) {
      const normalizedPayload = customCountryPayload(payload); //Customize the payload object to match province payload object

      state.status = "success";
      state.cummulative = normalizedPayload;
      state.error = null;
    },

    fetchCountryFailure(state, { payload }: PayloadAction<string>) {
      state.status = "failure";
      state.error = payload;
    },
  },
});

export const {
  fetchCountryStart,
  fetchCountrySuccess,
  fetchCountryFailure,
} = country.actions;

export default country.reducer;

/****** Thunks ******/
export const fetchCountry = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCountryStart());

    const response = await getCountries();
    dispatch(fetchCountrySuccess(response));
  } catch (error) {
    dispatch(fetchCountryFailure(error.message));
  }
};
