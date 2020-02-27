import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const CartReducer = (InitialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_ACTION:
      return {
        ...InitialState,
        hidden: !InitialState.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...InitialState,
        cartItems: addItemToCart(InitialState.cartItems, action.payload)
      };
    default:
      return InitialState;
  }
};
export default CartReducer;
