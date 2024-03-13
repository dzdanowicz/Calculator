import initialState from "../../initialState";
import { CLEAR_INPUT, NUM_INPUT } from "../actionTypes";

const keyboardReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case NUM_INPUT:
      if (newState.displayPrimary === "0") {
        newState.displayPrimary = "";
      }
      if (newState.displayPrimary.length === 16) {
        return newState;
      }

      newState.displayPrimary += action.value;
      console.log(newState);
      return newState;

    case CLEAR_INPUT:
      return initialState;

    default:
      return state;
  }
};

export default keyboardReducer;
