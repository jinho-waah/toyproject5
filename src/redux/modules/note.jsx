const ADD = "note/ADD";
const DEL = "note/DEL";

export const noteAdd = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const noteLOG = (payload) => {
  return {
    type: DEL,
    payload,
  };
};

const initialState = [{ value: 0 }];

const note = (state = initialState, action) => {
  const number = Number(action.payload?.number);
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DEL:
      return [{ number: Math.log(number) }];
    default:
      return state;
  }
};

export default note;
