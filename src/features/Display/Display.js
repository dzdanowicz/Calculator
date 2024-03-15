import "./Display.css";
import { useSelector } from "react-redux";

function Display() {
  const displayPrimVal = useSelector(
    (state) => state.keyboardReducer.displayPrimary
  );
  const displaySecVal = useSelector(
    (state) => state.keyboardReducer.displaySecondary
  );

  let displaySecClass = "displaySecondary";
  const displaySecVisibility = useSelector(
    (state) => state.keyboardReducer.displaySecVisibility
  );
  if (displaySecVisibility) {
    displaySecClass += " visible";
  }

  const formatedNumber = new Intl.NumberFormat().format(displayPrimVal);

  return (
    <div className="Display" id="display">
      <div className={displaySecClass}>{displaySecVal}</div>
      <div className="displayPrimary">{formatedNumber}</div>
    </div>
  );
}

export default Display;
