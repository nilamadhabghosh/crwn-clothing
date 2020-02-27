import CartActionTypes from "./cart.types";

export const togglecartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_ACTION
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
