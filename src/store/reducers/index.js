import { combineReducers } from "redux";
import details from "./users";
import themeData from "./theme";

const rootReducer = combineReducers({
  user: details,
  theme: themeData,
});

export default rootReducer;
