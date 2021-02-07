import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../slices";

export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

export type { RootState };

export interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Stats {
  confirmed: number;
  deaths: number;
  recovered: number;
}

interface CountryInfo {
  lat: number;
  long: number;
}

export interface Country {
  cases: number;
  deaths: number;
  recovered: number;
  tests: number;
  active: number;
  country: string;
  countryInfo: CountryInfo;
}

export interface Province extends Stats {
  country: string;
  stats: Stats;
  coordinates: Coordinates;
  province: string;
}

export interface Gemometry {
  type: string;
  coordinates: number[];
}

export interface Feature {
  type: string;
  properties: Province;
  geometry: Gemometry;
}

export interface WorldWide extends Stats {
  updated: number;
  cases: number;
}

export interface StatisticsState {
  status: "idle" | "pending" | "success" | "failure";
  error: null | string;
  countries: Record<string, Country>;
  worldwide: WorldWide;
  province: Record<string, Province>;
}
