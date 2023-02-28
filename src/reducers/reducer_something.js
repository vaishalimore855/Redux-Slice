import { FETCH_SOMETHING } from "../actions/index";
const initialState = {};
const Data = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOMETHING:
      return (state = action.payload);
    default:
      return state;
  }
};

export default Data;
