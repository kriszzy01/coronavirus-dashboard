import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCountries, getWorldWide, getProvince } from "../api";

import { customCountryPayload, initialStatistics } from "../utils";

import {
  AppThunk,
  Province,
  StatisticsState,
  WorldWide,
  Country,
} from "../types";

const fetchStart = (state: StatisticsState) => {
  state.status = "pending";
  state.error = null;
};

const fetchFailure = (
  state: StatisticsState,
  { payload }: PayloadAction<string>
) => {
  state.status = "failure";
  state.error = payload;
};

/****** Statistics Reducer ******/
const statistics = createSlice({
  name: "statistics",
  initialState: initialStatistics,
  reducers: {
    /*****Province Statistics Reducers*****/
    fetchProvinceStart: fetchStart,

    fetchProvinceSuccess(state, { payload }: PayloadAction<Province[]>) {
      const normalizedPayload = payload.reduce((prev, next) => {
        return {
          ...prev,
          [`${next.province ? `${next.province},` : ""} ${next.country}`]: next,
        };
      }, {});

      state.status = "success";
      state.province = normalizedPayload;
      state.error = null;
    },

    fetchProvinceFailure: fetchFailure,

    /***** Worldwide Statistics Reducers*****/
    fetchWorldWideStart: fetchStart,

    fetchWorldWideSuccess(state, { payload }: PayloadAction<WorldWide>) {
      state.status = "success";
      state.worldwide = payload;
      state.error = null;
    },

    fetchWorldWideFailure: fetchFailure,

    /***** Worldwide Statistics Reducers*****/
    fetchCountriesStart: fetchStart,

    fetchCountriesSuccess(state, { payload }: PayloadAction<Country[]>) {
      const normalizedPayload = customCountryPayload(payload); //Customize the payload object to match province payload object

      state.status = "success";
      state.countries = normalizedPayload;
      state.error = null;
    },

    fetchCountriesFailure: fetchFailure,
  },
});

export const {
  fetchProvinceStart,
  fetchProvinceSuccess,
  fetchProvinceFailure,
  fetchWorldWideFailure,
  fetchWorldWideStart,
  fetchWorldWideSuccess,
  fetchCountriesStart,
  fetchCountriesSuccess,
  fetchCountriesFailure,
} = statistics.actions; //Action Creators

export default statistics.reducer; //Statistics Reducer

/****** Thunks ******/
export const fetchCountries = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCountriesStart());

    const response = await getCountries();
    dispatch(fetchCountriesSuccess(response));
  } catch (error) {
    dispatch(fetchCountriesFailure(error.message));
  }
};

export const fetchProvince = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchProvinceStart());

    const response = await getProvince();
    dispatch(fetchProvinceSuccess(response));
  } catch (error) {
    dispatch(fetchProvinceFailure(error.message));
  }
};

export const fetchWorldWide = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchWorldWideStart());

    const response = await getWorldWide();
    dispatch(fetchWorldWideSuccess(response));
  } catch (error) {
    dispatch(fetchWorldWideFailure(error.message));
  }
};
