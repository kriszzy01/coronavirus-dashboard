import { RootState } from "../types";

export const getCountries = (state: RootState) => state.statistics.countries;
export const getProvince = (state: RootState) => state.statistics.province;
export const getMapData = (state: RootState) => state.mapData.activeData;
