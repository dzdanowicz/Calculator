import { combineReducers } from "redux";
import keyboardReducer from "./features/Keyboard/keyboardReducer";

const rootReducer = combineReducers({
  keyboardReducer,
});

export default rootReducer;
