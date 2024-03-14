import "./Display.css";
import { useSelector } from "react-redux";

function Display() {
  const displayValue = useSelector(
    (state) => state.keyboardReducer.displayPrimary
  );

  const formatedNumber = new Intl.NumberFormat().format(displayValue);

  return (
    <div className="Display" id="display">
      <div className="result">{formatedNumber}</div>
    </div>
  );
}

export default Display;
