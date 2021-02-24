import { combineReducers } from "redux";
import worldwideReducer from "./worldwide";
import mapDataReducer from "./map";
import countryReducer from "./country";
import provinceReducer from "./province";

const rootReducer = combineReducers({
  worldwide: worldwideReducer,
  mapData: mapDataReducer,
  country: countryReducer,
  province: provinceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
