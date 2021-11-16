import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";

import CollectionPreview from "../CollectionPreview/CollectionPreview";

import * as S from "./CollectionsOverview.styles";

const CollectionsOverview = ({ collections }) => {
  return (
    <S.CollectionsOverview>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </S.CollectionsOverview>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
