import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelectors";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

import * as S from "./CollectionPage.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <S.CollectionPage>
      <S.CollectionHeader>
        <S.TitleSecondary>{title}</S.TitleSecondary>
      </S.CollectionHeader>

      <S.ProductList>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.ProductList>
    </S.CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
