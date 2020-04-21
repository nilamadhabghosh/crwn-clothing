import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { togglecartHidden } from '../../redux/cart/cart.action';

import CustomButton from "../custom-buttons/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const Cart = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          )))
          : (
            <span className="empty-message">Your Cart Is Empty</span>
          )
      }
    </div>
    <CustomButton onClick={
      () => {
        history.push('/checkout');
        dispatch(togglecartHidden())
      }
    }>Go TO Checkout</CustomButton>
  </div >
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
