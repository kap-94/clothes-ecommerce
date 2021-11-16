import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartActions";

import * as S from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <S.CheckoutItem>
      <S.CheckoutImageContainer>
        <S.CheckoutImage src={imageUrl} alt={name} />
      </S.CheckoutImageContainer>

      <S.Text>{name}</S.Text>

      <S.QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </S.QuantityContainer>

      <S.Text>{price}</S.Text>

      <S.RemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </S.RemoveButton>
    </S.CheckoutItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
