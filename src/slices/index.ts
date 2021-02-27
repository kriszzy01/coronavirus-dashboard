import { combineReducers } from "redux";
import worldwideReducer from "./worldwide";
import mapDataReducer from "./map";
import countryReducer from "./country";

const rootReducer = combineReducers({
  worldwide: worldwideReducer,
  mapData: mapDataReducer,
  country: countryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
