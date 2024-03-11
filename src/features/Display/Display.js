import "./Display.css";
import { useSelector } from "react-redux";

function Display() {
  const displayValue = useSelector(
    (state) => state.keyboardReducer.displayPrimary
  );
  return (
    <div className="Display" id="display">
      <div className="result">{displayValue}</div>
    </div>
  );
}

export default Display;
