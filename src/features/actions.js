import { CLEAR_INPUT, NUM_INPUT } from "./actionTypes";

export const clickNumber = (eventValue) => {
  return {
    type: NUM_INPUT,
    value: eventValue,
  };
};

export const clickClear = (eventValue) => {
  return {
    type: CLEAR_INPUT,
  };
};
