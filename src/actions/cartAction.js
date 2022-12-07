import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

//action creators - pure Js functions that return action object with a specific type
const addItem = () => {
  return {
    type: ADD_ITEM, //each action obj must have unique type value
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export { addItem, deleteItem };
