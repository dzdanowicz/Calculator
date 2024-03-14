import { CLR_INPUT, DEL_INPUT, NUM_INPUT } from "./actionTypes";

export const clickNumber = (eventValue) => {
  return {
    type: NUM_INPUT,
    value: eventValue,
  };
};

export const clickClear = () => {
  return {
    type: CLR_INPUT,
  };
};

export const clickDel = () => {
  return {
    type: DEL_INPUT,
  };
};
