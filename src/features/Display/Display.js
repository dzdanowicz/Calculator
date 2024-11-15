import "./Display.css";
import { useSelector } from "react-redux";

function Display() {
  const displayPrimVal = useSelector(
    (state) => state.keyboardReducer.displayPrimary
  );
  const displaySecVal = useSelector(
    (state) => state.keyboardReducer.displaySecondary
  );
  const showDecimalVal = useSelector(
    (state) => state.keyboardReducer.showDecimal
  );

  let displaySecClass = "displaySecondary";
  const showDisplaySec = useSelector(
    (state) => state.keyboardReducer.showDisplaySec
  );
  if (showDisplaySec) {
    displaySecClass += " visible";
  }

  let showDecimalClass = "displayNone";
  if (showDecimalVal) {
    showDecimalClass = "displayInline";
  }

  let trailingZeros = "";
  if (
    displayPrimVal.includes(".") &&
    displayPrimVal[displayPrimVal.length - 1] === "0"
  ) {
    let zeroCount = displayPrimVal.match(/0*$/g)[0].length;
    for (let i = 0; i < zeroCount; i++) {
      trailingZeros += "0";
    }
  }

  let displayPrimary = "";
  let displayPrimClass = "displayPrimary";

  const formattedDisplayPrim = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 16,
    minimumIntegerDigits: 1,
  }).format(displayPrimVal);

  if (displayPrimVal.length <= 18 && !displayPrimVal.includes("e")) {
    displayPrimary = formattedDisplayPrim;
  } else {
    displayPrimary = Number(displayPrimVal).toExponential();

    if (displayPrimary.length >= 16) {
      displayPrimClass += " smallerFont";
    }
  }

  return (
    <div className="Display" id="display">
      <div className={displaySecClass}>{displaySecVal}</div>
      <div className={displayPrimClass}>
        {displayPrimary}
        <span className={showDecimalClass}>.</span>
        <span>{trailingZeros}</span>
      </div>
    </div>
  );
}

export default Display;
