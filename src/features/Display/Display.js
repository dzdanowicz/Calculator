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
  const displaySecVisibility = useSelector(
    (state) => state.keyboardReducer.displaySecVisibility
  );
  if (displaySecVisibility) {
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

  const formatedNumber = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 16,
    minimumIntegerDigits: 1,
  }).format(displayPrimVal);

  return (
    <div className="Display" id="display">
      <div className={displaySecClass}>{displaySecVal}</div>
      <div className="displayPrimary">
        {formatedNumber}
        <span className={showDecimalClass}>.</span>
        <span>{trailingZeros}</span>
      </div>
    </div>
  );
}

export default Display;
