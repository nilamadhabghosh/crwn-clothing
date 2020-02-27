import React from "react";
import { connect } from "react-redux";
import { togglecartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ togglecartHidden, itemCount }) => (
  <div className="cart-icon" onClick={togglecartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  togglecartHidden: () => dispatch(togglecartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
