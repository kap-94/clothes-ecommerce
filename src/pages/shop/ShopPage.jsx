import React, { Component } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import { fetchCollectionStartAsync } from "../../redux/shop/shopActions.js";

import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
import CollectionPageContainer from "../collection/CollectionPageContainer";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
