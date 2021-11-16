import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionStartAsync } from "../../redux/shop/shopActions";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";

import * as S from "./Footer.styles";

class Footer extends Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { collections } = this.props;

    return (
      <S.Footer>
        <S.Column>
          <S.Title>Collections</S.Title>
          <S.Wrapper>
            {collections.map((collection) => (
              <S.FooterLink
                key={collection.id}
                to={`/shop/${collection.routeName}`}
              >
                {collection.title}
              </S.FooterLink>
            ))}
          </S.Wrapper>
        </S.Column>
      </S.Footer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
