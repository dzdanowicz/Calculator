function operation(state, sign, dispSecNum) {
  if (state.isResultExecuted) {
    state.displaySecondary =
      state.displayPrimary + " " + sign + " " + state.secondNum + " =";

    switch (sign) {
      case "+":
        state.displayPrimary =
          Number(state.displayPrimary) + Number(state.secondNum);
        break;

      case "-":
        state.displayPrimary =
          Number(state.displayPrimary) - Number(state.secondNum);
        break;

      case "x":
        state.displayPrimary =
          Number(state.displayPrimary) * Number(state.secondNum);
        break;

      case "/":
        state.displaySecondary =
          state.displayPrimary +
          " " +
          String.fromCharCode(247) +
          " " +
          state.secondNum +
          " =";

        if (state.secondNum === "0") {
          state.displayPrimary = "0";
          return state;
        }

        state.displayPrimary =
          Number(state.displayPrimary) / Number(state.secondNum);

      default:
        break;
    }

    state.displayPrimary = state.displayPrimary.toString();
    return state;
  }

  switch (sign) {
    case "+":
      state.displayPrimary = Number(state.displayPrimary) + Number(dispSecNum);
      break;

    case "-":
      state.displayPrimary = Number(dispSecNum) - Number(state.displayPrimary);
      break;

    case "x":
      state.displayPrimary = Number(dispSecNum) * Number(state.displayPrimary);
      break;

    case "/":
      if (state.secondNum === "0") {
        state.displayPrimary = "0";
        state.isResultExecuted = true;
        return state;
      }

      state.displayPrimary = Number(dispSecNum) / Number(state.displayPrimary);
      break;

    default:
      break;
  }
  state.displayPrimary = state.displayPrimary.toString();
  state.isResultExecuted = true;
  return state;
}

export default operation;
