import { RootState } from "../types";

export const getProvince = (state: RootState) => state.province.cummulative;
export const getWorldwide = (state: RootState) => state.worldwide.cummulative;
export const getCountry = (state: RootState) => state.country.cummulative;
export const getMapData = (state: RootState) => state.mapData.activeData;
export const getTargetData = (state: RootState) => state.mapData.targetData;
