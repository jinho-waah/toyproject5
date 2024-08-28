const ROOT = "calc/ROOT";
const LN = "calc/LN";
const SIN = "calc/SIN";
const COS = "calc/COS";
const TAN = "calc/TAN";

export const calRoot = (payload) => {
  return {
    type: ROOT,
    payload,
  };
};

export const calLN = (payload) => {
  return {
    type: LN,
    payload,
  };
};
export const calSIN = (payload) => {
  return {
    type: SIN,
    payload,
  };
};
export const calCOS = (payload) => {
  return {
    type: COS,
    payload,
  };
};
export const calTAN = (payload) => {
  return {
    type: TAN,
    payload,
  };
};

const initialState = {
  number: 0,
};

const calc = (state = initialState, action) => {
  const number = Number(action.payload?.number);

  switch (action.type) {
    case ROOT:
      return { number: Math.sqrt(number) };
    case LN:
      return { number: Math.log(number) };
    case SIN:
      return { number: Math.sin(number) };
    case COS:
      return { number: Math.cos(number) };
    case TAN:
      return { number: Math.tan(number) };
    default:
      return state;
  }
};

export default calc;
