import "./Keyboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faDeleteLeft,
  faDivide,
  faXmark,
  faMinus,
  faPlus,
  faPlusMinus,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";

function Keyboard() {
  return (
    <div className="keyboard-container">
      <div className="btn">
        <FontAwesomeIcon icon={faPercent} />
      </div>
      <div className="btn" id="clear">
        CE
      </div>
      <div className="btn">
        <FontAwesomeIcon icon={faDeleteLeft} />
      </div>
      <div className="btn" id="divide">
        <FontAwesomeIcon icon={faDivide} />
      </div>
      <div className="btn" id="seven">
        7
      </div>
      <div className="btn" id="eight">
        8
      </div>
      <div className="btn" id="nine">
        9
      </div>
      <div className="btn" id="multiply">
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="btn" id="four">
        4
      </div>
      <div className="btn" id="five">
        5
      </div>
      <div className="btn" id="six">
        6
      </div>
      <div className="btn" id="subtract">
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <div className="btn" id="one">
        1
      </div>
      <div className="btn" id="two">
        2
      </div>
      <div className="btn" id="three">
        3
      </div>
      <div className="btn" id="add">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="btn">
        <FontAwesomeIcon icon={faPlusMinus} />
      </div>
      <div className="btn" id="zero">
        0
      </div>
      <div className="btn" id="decimal">
        .
      </div>
      <div className="btn" id="equals">
        <FontAwesomeIcon icon={faEquals} />
      </div>
    </div>
  );
}

export default Keyboard;
