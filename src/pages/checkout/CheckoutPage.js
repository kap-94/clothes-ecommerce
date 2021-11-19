import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import * as S from "./CheckoutPage.styles";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <S.CheckoutPage>
      <S.CheckoutHeader>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </S.CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>

      <StripeCheckoutButton price={total} />

      <div className="credit-card-data">
        <h3>Use the following data for credit card payments:</h3>
        <h3>4242 4242 4242 4242 - Exp: 01/23 - CW: 123</h3>
      </div>
    </S.CheckoutPage>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
