import { RootState } from "../types";

export const getWorldwide = (state: RootState) => state.worldwide.cummulative;
export const getWorldHistory = (state: RootState) => state.worldwide.historical;

export const getCountry = (state: RootState) => state.country.cummulative;
export const getCountryHistory = (state: RootState) => state.country.historical;

export const getMapData = (state: RootState) => state.mapData.activeData;
export const getTargetData = (state: RootState) => state.mapData.targetData;
