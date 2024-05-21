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
      newState.showDecimal = false;
      if (newState.displayPrimary === "0" || newState.emptyDisplayPrim) {
        newState.displayPrimary = "";
        if (action.value === ".") {
          newState.displayPrimary = "0.";
          newState.showDecimal = true;
          newState.emptyDisplayPrim = false;
          return newState;
        }
      }
      if (newState.displayPrimary.length === 16) {
        return newState;
      }
      if (newState.isResultExecuted) {
        return initialState;
      }
      if (action.value === ".") {
        if (newState.displayPrimary.includes(".")) {
          if (newState.displayPrimary === "0.") {
            newState.showDecimal = true;
          }
          return newState;
        }
        newState.showDecimal = true;
        newState.displayPrimary += ".";
        return newState;
      }

      if (action.value === "0" && newState.displayPrimary.includes(".")) {
        newState.showDecimal = true;
      }
      newState.displayPrimary += action.value;
      newState.emptyDisplayPrim = false;
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
      if (/[.]0/g.test(newState.displayPrimary)) {
        newState.showDecimal = true;
      }
      if (newState.displayPrimary.slice(-1) === ".") {
        newState.showDecimal = false;
      }
      let slicedString = newState.displayPrimary.slice(
        0,
        newState.displayPrimary.length - 1
      );
      newState.displayPrimary = slicedString;

      if (newState.displayPrimary === "") {
        newState.displayPrimary = "0";
      }
      return newState;

    case OPS_INPUT:
      newState.operation = action.value;
      newState.showDecimal = false;

      if (newState.isResultExecuted) {
        newState.isResultExecuted = false;
      }

      let primLength = newState.displayPrimary.length;
      if (newState.displayPrimary.slice(primLength - 1) === ".") {
        newState.displayPrimary = newState.displayPrimary.slice(
          0,
          primLength - 1
        );
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
          break;
        case "divide":
          newState.displaySecondary =
            newState.displayPrimary + " " + String.fromCharCode(247);
      }
      newState.displaySecVisibility = true;
      newState.emptyDisplayPrim = true;
      return newState;

    case EQL_INPUT:
      let getNumberRegex = /^[+-]?(?:\d*\.)?\d+/g;
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
            newState.displayPrimary = newState.displayPrimary.toString();
            return newState;
          }

          newState.displayPrimary =
            Number(newState.displayPrimary) + Number(dispSecNum);
          newState.displayPrimary = newState.displayPrimary.toString();
          newState.isResultExecuted = true;
          return newState;

        case "subtraction":
          if (newState.isResultExecuted) {
            newState.displaySecondary =
              newState.displayPrimary + " - " + newState.secondNum + " =";
            newState.displayPrimary =
              Number(newState.displayPrimary) - Number(newState.secondNum);
            newState.displayPrimary = newState.displayPrimary.toString();
            return newState;
          }

          newState.displayPrimary =
            Number(dispSecNum) - Number(newState.displayPrimary);
          newState.displayPrimary = newState.displayPrimary.toString();
          newState.isResultExecuted = true;
          return newState;

        case "multiply":
          if (newState.isResultExecuted) {
            newState.displaySecondary =
              newState.displayPrimary + " x " + newState.secondNum + " =";
            newState.displayPrimary =
              Number(newState.displayPrimary) * Number(newState.secondNum);
            newState.displayPrimary = newState.displayPrimary.toString();
            return newState;
          }

          newState.displayPrimary =
            Number(dispSecNum) * Number(newState.displayPrimary);
          newState.displayPrimary = newState.displayPrimary.toString();
          newState.isResultExecuted = true;
          return newState;

        case "divide":
          if (newState.isResultExecuted) {
            newState.displaySecondary =
              newState.displayPrimary +
              " " +
              String.fromCharCode(247) +
              " " +
              newState.secondNum +
              " =";

            if (newState.secondNum === "0") {
              newState.displayPrimary = "0";
              return newState;
            }
            newState.displayPrimary =
              Number(newState.displayPrimary) / Number(newState.secondNum);
            newState.displayPrimary = newState.displayPrimary.toString();
            return newState;
          }

          if (newState.secondNum === "0") {
            newState.displayPrimary = "0";
            newState.isResultExecuted = true;
            return newState;
          }
          newState.displayPrimary =
            Number(dispSecNum) / Number(newState.displayPrimary);
          newState.displayPrimary = newState.displayPrimary.toString();
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
