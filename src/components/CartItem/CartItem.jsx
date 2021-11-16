import React from "react";

import * as S from "./CartItem.styles";

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <S.CartItem>
      <S.CartItemImage src={imageUrl} alt={name} />
      <S.CartItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </S.CartItemDetails>
    </S.CartItem>
  );
};
