import { combineReducers } from "redux";
import keyboardReducer from "./features/Keyboard/keyboardReducer";

const rootReducer = combineReducers({
  input: keyboardReducer,
});

export default rootReducer;
