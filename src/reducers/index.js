import { combineReducers } from "redux";
import compBReducer from "./compBReducer";

const rootReducer = combineReducers({
  compB: compBReducer,
  // Add more reducers here if needed
});

export default rootReducer;
