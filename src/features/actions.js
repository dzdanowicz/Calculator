import {
  CLR_INPUT,
  DEL_INPUT,
  EQL_INPUT,
  NUM_INPUT,
  OPS_INPUT,
  PCT_INPUT,
} from "./actionTypes";

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

export const clickOps = (eventValue) => {
  return {
    type: OPS_INPUT,
    value: eventValue,
  };
};

export const clickPct = () => {
  return {
    type: PCT_INPUT,
  };
};

export const clickEql = () => {
  return {
    type: EQL_INPUT,
  };
};
