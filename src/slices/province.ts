import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProvinceState, Province, AppThunk } from "../types";
import { getProvince } from "../api";
import { customProvincePayload } from "../utils";

const initialState: ProvinceState = {
  status: "idle",
  error: null,
  cummulative: {},
  historical: {},
};

const country = createSlice({
  name: "country",
  initialState,
  reducers: {
    fetchProvinceStart(state) {
      state.status = "pending";
      state.error = null;
    },

    fetchProvinceSuccess(state, { payload }: PayloadAction<Province[]>) {
      const normalizedPayload = customProvincePayload(payload);

      state.status = "success";
      state.cummulative = normalizedPayload;
      state.error = null;
    },

    fetchProvinceFailure(state, { payload }: PayloadAction<string>) {
      state.status = "failure";
      state.error = payload;
    },
  },
});

export const {
  fetchProvinceStart,
  fetchProvinceSuccess,
  fetchProvinceFailure,
} = country.actions;

export default country.reducer;

/****** Thunks ******/
export const fetchProvince = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchProvinceStart());

    const response = await getProvince();

    dispatch(fetchProvinceSuccess(response));
  } catch (error) {
    dispatch(fetchProvinceFailure(error.message));
  }
};
