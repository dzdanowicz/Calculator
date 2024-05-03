import initialState from "../../initialState";
import {
  CLR_INPUT,
  DEL_INPUT,
  EQL_INPUT,
  NUM_INPUT,
  OPS_INPUT,
} from "../actionTypes";

const keyboardReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case NUM_INPUT:
      if (newState.displayPrimary === "0" || newState.emptyDisplayPrim) {
        newState.displayPrimary = "";
      }
      if (newState.displayPrimary.length === 16) {
        return newState;
      }
      if (newState.isResultExecuted) {
        return initialState;
      }

      newState.displayPrimary += action.value;
      newState.emptyDisplayPrim = false;
      console.log(newState);
      return newState;

    case CLR_INPUT:
      return initialState;

    case DEL_INPUT:
      if (newState.isResultExecuted) {
        newState.displaySecondary = "0";
        newState.displaySecVisibility = false;
        newState.operation = "";
        newState.isResultExecuted = false;
        return newState;
      }
      let slicedString = newState.displayPrimary.slice(
        0,
        newState.displayPrimary.length - 1
      );
      newState.displayPrimary = slicedString;
      return newState;

    case OPS_INPUT:
      newState.operation = action.value;

      if (newState.isResultExecuted) {
        newState.isResultExecuted = false;
      }

      switch (action.value) {
        case "addition":
          newState.displaySecondary = newState.displayPrimary + " +";
          break;
        case "subtraction":
          newState.displaySecondary = newState.displayPrimary + " -";
          break;
        case "multiply":
          newState.displaySecondary = newState.displayPrimary + " x";
      }
      newState.displaySecVisibility = true;
      newState.emptyDisplayPrim = true;
      return newState;

    case EQL_INPUT:
      let getNumberRegex = /\d*/g;
      let dispSecNum = getNumberRegex.exec(newState.displaySecondary)[0];
      if (!newState.isResultExecuted) {
        newState.displaySecondary += " " + newState.displayPrimary + " =";
        newState.firstNum = dispSecNum;
        newState.secondNum = newState.displayPrimary;
      }

      switch (newState.operation) {
        case "addition":
          if (newState.isResultExecuted) {
            newState.displaySecondary =
              newState.displayPrimary + " + " + newState.secondNum + " =";
            newState.displayPrimary =
              Number(newState.displayPrimary) + Number(newState.secondNum);
            return newState;
          }

          newState.displayPrimary =
            Number(newState.displayPrimary) + Number(dispSecNum);
          newState.isResultExecuted = true;
          return newState;

        case "subtraction":
          if (newState.isResultExecuted) {
            newState.displaySecondary =
              newState.displayPrimary + " - " + newState.secondNum + " =";
            newState.displayPrimary =
              Number(newState.displayPrimary) - Number(newState.secondNum);
            return newState;
          }

          newState.displayPrimary =
            Number(dispSecNum) - Number(newState.displayPrimary);
          newState.isResultExecuted = true;
          return newState;

        case "multiply":
          if (newState.isResultExecuted) {
            newState.displaySecondary =
              newState.displayPrimary + " x " + newState.secondNum + " =";
            newState.displayPrimary =
              Number(newState.displayPrimary) * Number(newState.secondNum);
            return newState;
          }

          newState.displayPrimary =
            Number(dispSecNum) * Number(newState.displayPrimary);
          newState.isResultExecuted = true;
          return newState;

        default:
          break;
      }

    default:
      return state;
  }
};

export default keyboardReducer;
