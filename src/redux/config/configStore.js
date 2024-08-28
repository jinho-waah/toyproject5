import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import calc from "../modules/calc";
import note from "../modules/note";

const rootReducer = combineReducers({
  calc,
  note,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
