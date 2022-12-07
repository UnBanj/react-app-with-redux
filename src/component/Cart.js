import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
        className="green"
      >
        Add item to cart
      </button>
      <button
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}
        className="red"
      >
        Remove item from cart
      </button>
    </div>
  );
};

export default Cart;
