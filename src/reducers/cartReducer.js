import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  numOfItems: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };
    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state; //if none of the action types match, return the state as it is
  }
};
