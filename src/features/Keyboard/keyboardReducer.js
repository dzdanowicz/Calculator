import initialState from "../../initialState";
import { NUM_INPUT } from "../actionTypes";

const keyboardReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case NUM_INPUT:
      if (newState.displayPrimary === "0") {
        newState.displayPrimary = "";
      }
      newState.displayPrimary += action.value;
      console.log(newState);
      return newState;

    default:
      return state;
  }
};

export default keyboardReducer;
