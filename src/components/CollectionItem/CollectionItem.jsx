import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cartActions";

import * as S from "./CollectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price, description } = item;

  return (
    <S.CollectionItem>
      <S.BackgroundImage className="image" imageUrl={imageUrl} />

      <S.CollectionItemFooter>
        <S.NameContainer>{name}</S.NameContainer>
        <S.DescriptionContainer>{description}</S.DescriptionContainer>
        <S.PriceContainer>$ {price}</S.PriceContainer>
      </S.CollectionItemFooter>

      <S.AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </S.AddButton>
    </S.CollectionItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
