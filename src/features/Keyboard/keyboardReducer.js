import initialState from "../../initialState";
import {
  CLR_INPUT,
  DEL_INPUT,
  EQL_INPUT,
  NUM_INPUT,
  OPS_INPUT,
  PCT_INPUT,
} from "../actionTypes";
import operation from "./operations";

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
          if (
            newState.displayPrimary === "0." ||
            newState.displayPrimary.slice(-1) === "."
          ) {
            newState.showDecimal = true;
          }
          return newState;
        }
        newState.showDecimal = true;
        newState.displayPrimary += ".";
        return newState;
      }

      newState.displayPrimary += action.value;
      newState.emptyDisplayPrim = false;
      return newState;

    case CLR_INPUT:
      return initialState;

    case DEL_INPUT:
      if (newState.isResultExecuted) {
        newState.displaySecondary = "0";
        newState.showDisplaySec = false;
        newState.operation = "";
        newState.isResultExecuted = false;
        return newState;
      }
      if (/[.]0/g.test(newState.displayPrimary)) {
        newState.showDecimal = true;
      }
      console.log(newState.displayPrimary.slice(-2, -1));
      if (newState.displayPrimary.slice(-1) === ".") {
        newState.showDecimal = false;
      }
      if (newState.displayPrimary.slice(-2, -1) === ".") {
        newState.showDecimal = true;
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
        case "add":
          newState.displaySecondary = newState.displayPrimary + " +";
          break;
        case "subtract":
          newState.displaySecondary = newState.displayPrimary + " -";
          break;
        case "multiply":
          newState.displaySecondary = newState.displayPrimary + " x";
          break;
        case "divide":
          newState.displaySecondary =
            newState.displayPrimary + " " + String.fromCharCode(247);
      }
      newState.showDisplaySec = true;
      newState.emptyDisplayPrim = true;
      return newState;

    case EQL_INPUT:
      let getNumberRegex = /^[+-]?(?:\d*\.)?\d+/g;
      let dispSecNum = getNumberRegex.exec(newState.displaySecondary)[0];
      if (!newState.isResultExecuted) {
        newState.firstNum = dispSecNum;
        newState.secondNum = newState.displayPrimary;

        if (newState.isPercentExecuted) {
          newState.displaySecondary += " =";
          newState.isPercentExecuted = false;
        } else {
          newState.displaySecondary += " " + newState.displayPrimary + " =";
        }
      }

      switch (newState.operation) {
        case "add":
          return operation(newState, "+", dispSecNum);

        case "subtract":
          return operation(newState, "-", dispSecNum);

        case "multiply":
          return operation(newState, "x", dispSecNum);

        case "divide":
          return operation(newState, "/", dispSecNum);

        default:
          break;
      }

    case PCT_INPUT:
      if (newState.displayPrimary != "0" && newState.showDisplaySec === false) {
        newState.displayPrimary = "0";
        newState.displaySecondary = "0";
        newState.showDisplaySec = true;
        return newState;
      }

      let regex = /^[+-]?(?:\d*\.)?\d+/g;
      let firstNum = regex.exec(newState.displaySecondary)[0];
      let num = newState.displayPrimary / 100;
      let pct = firstNum * num;
      newState.displayPrimary = pct.toString();
      newState.isPercentExecuted = true;

      switch (newState.operation) {
        case "add":
          newState.displaySecondary = firstNum + " + " + pct;
          return newState;

        case "subtract":
          newState.displaySecondary = firstNum + " - " + pct;
          return newState;

        case "multiply":
          newState.displaySecondary = firstNum + " * " + pct;
          return newState;

        case "divide":
          newState.displaySecondary = firstNum + " / " + pct;
          return newState;
        default:
          break;
      }

    default:
      return state;
  }
};

export default keyboardReducer;
