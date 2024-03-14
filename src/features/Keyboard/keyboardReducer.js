import initialState from "../../initialState";
import { CLR_INPUT, DEL_INPUT, NUM_INPUT } from "../actionTypes";

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

    case CLR_INPUT:
      return initialState;

    case DEL_INPUT:
      let slicedString = newState.displayPrimary.slice(
        0,
        newState.displayPrimary.length - 1
      );
      newState.displayPrimary = slicedString;
      return newState;

    default:
      return state;
  }
};

export default keyboardReducer;
