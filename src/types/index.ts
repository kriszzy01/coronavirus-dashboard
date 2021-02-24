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
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
}

interface CountryInfo {
  lat: number;
  long: number;
  flag: string;
}

export interface Country {
  cases: number;
  deaths: number;
  recovered: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  tests: number;
  active: number;
  country: string;
  countryInfo: CountryInfo;
}

export interface Province extends Stats {
  active: number;
  country: string;
  stats: Stats;
  coordinates: Coordinates;
  province: string;
  flag: string;
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
  affectedCountries: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  active: number;
}

export interface HistoricalAll {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

export interface CountryState {
  status: "idle" | "pending" | "success" | "failure";
  error: null | string;
  cummulative: Record<string, Province>;
  historical: any;
}

export interface ProvinceState {
  status: "idle" | "pending" | "success" | "failure";
  error: null | string;
  cummulative: Record<string, Province>;
  historical: any;
}

export interface WorldwideState {
  status: "idle" | "pending" | "success" | "failure";
  error: null | string;
  cummulative: WorldWide;
  historical: HistoricalAll;
}
