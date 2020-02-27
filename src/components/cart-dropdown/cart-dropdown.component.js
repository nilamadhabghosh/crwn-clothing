import React from "react";

import CustomButton from "../custom-buttons/custom-button.component";
import "./cart-dropdown.styles.scss";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>Go TO Checkout</CustomButton>
    </div>
  </div>
);

export default Cart;
