import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import * as S from "./CartIcon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <S.CartIcon onClick={toggleCartHidden}>
      <S.ShoppingIcon />
      <S.ItemCount>{itemCount}</S.ItemCount>
    </S.CartIcon>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
