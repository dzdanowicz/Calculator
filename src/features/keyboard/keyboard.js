import "./keyboard.css";
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
      <div className="btn">CE</div>
      <div className="btn">
        <FontAwesomeIcon icon={faDeleteLeft} />
      </div>
      <div className="btn">
        <FontAwesomeIcon icon={faDivide} />
      </div>
      <div className="btn">7</div>
      <div className="btn">8</div>
      <div className="btn">9</div>
      <div className="btn">
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="btn">4</div>
      <div className="btn">5</div>
      <div className="btn">6</div>
      <div className="btn">
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <div className="btn">1</div>
      <div className="btn">2</div>
      <div className="btn">3</div>
      <div className="btn">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="btn">
        <FontAwesomeIcon icon={faPlusMinus} />
      </div>
      <div className="btn">0</div>
      <div className="btn">.</div>
      <div className="btn">
        <FontAwesomeIcon icon={faEquals} />
      </div>
    </div>
  );
}

export default Keyboard;
