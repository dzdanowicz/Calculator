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
import { useStore } from "react-redux";
import {
  CLR_INPUT,
  DEL_INPUT,
  EQL_INPUT,
  NUM_INPUT,
  OPS_INPUT,
} from "../actionTypes";
import {
  clickClear,
  clickDel,
  clickEql,
  clickNumber,
  clickOps,
} from "../actions";
import { useDispatch } from "react-redux";

function Keyboard() {
  const dispatchEvent = useDispatch();

  function dispatch(dispatchType, dispatchValue) {
    switch (dispatchType) {
      case NUM_INPUT:
        dispatchEvent(clickNumber(dispatchValue));
        break;
      case CLR_INPUT:
        dispatchEvent(clickClear());
        break;
      case DEL_INPUT:
        dispatchEvent(clickDel());
        break;
      case OPS_INPUT:
        dispatchEvent(clickOps("addition"));
        break;
      case EQL_INPUT:
        dispatchEvent(clickEql());
    }
  }

  return (
    <div className="keyboard-container">
      <div className="btn">
        <FontAwesomeIcon icon={faPercent} />
      </div>
      <div className="btn" id="clear" onClick={() => dispatch(CLR_INPUT)}>
        CE
      </div>
      <div className="btn" onClick={() => dispatch(DEL_INPUT)}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </div>
      <div className="btn" id="divide">
        <FontAwesomeIcon icon={faDivide} />
      </div>
      <div className="btn" id="seven" onClick={() => dispatch(NUM_INPUT, "7")}>
        7
      </div>
      <div className="btn" id="eight" onClick={() => dispatch(NUM_INPUT, "8")}>
        8
      </div>
      <div className="btn" id="nine" onClick={() => dispatch(NUM_INPUT, "9")}>
        9
      </div>
      <div className="btn" id="multiply">
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="btn" id="four" onClick={() => dispatch(NUM_INPUT, "4")}>
        4
      </div>
      <div className="btn" id="five" onClick={() => dispatch(NUM_INPUT, "5")}>
        5
      </div>
      <div className="btn" id="six" onClick={() => dispatch(NUM_INPUT, "6")}>
        6
      </div>
      <div className="btn" id="subtract">
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <div className="btn" id="one" onClick={() => dispatch(NUM_INPUT, "1")}>
        1
      </div>
      <div className="btn" id="two" onClick={() => dispatch(NUM_INPUT, "2")}>
        2
      </div>
      <div className="btn" id="three" onClick={() => dispatch(NUM_INPUT, "3")}>
        3
      </div>
      <div
        className="btn"
        id="add"
        onClick={() => dispatch(OPS_INPUT, "addition")}
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="btn">
        <FontAwesomeIcon icon={faPlusMinus} />
      </div>
      <div className="btn" id="zero" onClick={() => dispatch(NUM_INPUT, "0")}>
        0
      </div>
      <div className="btn" id="decimal">
        .
      </div>
      <div className="btn" id="equals" onClick={() => dispatch(EQL_INPUT)}>
        <FontAwesomeIcon icon={faEquals} />
      </div>
    </div>
  );
}

export default Keyboard;
