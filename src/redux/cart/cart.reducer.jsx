import CartActionTypes from "./cart.types";
const INITIAL_STATE = {
  hidden: true
};

const CartReducer = (InitialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_ACTION:
      return {
        ...InitialState,
        hidden: !InitialState.hidden
      };
    default:
      return InitialState;
  }
};
export default CartReducer;
