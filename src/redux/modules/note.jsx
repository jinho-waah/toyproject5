const ADD = "note/ADD";
const DEL = "note/DEL";

export const noteAdd = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const noteDel = (payload) => {
  return {
    type: DEL,
    payload,
  };
};

// const initialState = [{ value: 0 }];

const note = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DEL:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default note;
