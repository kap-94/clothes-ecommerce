import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../CollectionItem/CollectionItem";

import * as S from "./CollectionPreview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <S.CollectionPreview>
    <S.CollectionTitle
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </S.CollectionTitle>

    <S.CollectionRow>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </S.CollectionRow>
  </S.CollectionPreview>
);

export default withRouter(CollectionPreview);
