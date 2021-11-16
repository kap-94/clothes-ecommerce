import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItems } from "../../redux/cart/cartSelectors";

import { CartItem } from "../CartItem/CartItem";

import * as S from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <S.CartDropdown>
      <S.CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <S.EmptyMessageSpan>Your Cart is Empty</S.EmptyMessageSpan>
        )}
      </S.CartItems>

      <S.CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHEKOUT
      </S.CartDropdownButton>
    </S.CartDropdown>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
