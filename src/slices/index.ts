import { combineReducers } from "redux";
import statisticsReducer from "./statistics";
import mapDataReducer from "./map";

const rootReducer = combineReducers({
  statistics: statisticsReducer,
  mapData: mapDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
