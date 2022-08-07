import { combineReducers } from "redux";
import blocks from "./blocks";
import settings from "./settings";

export default combineReducers({
  blocks,
  settings,
});
