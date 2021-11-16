/* 

Container Pattern:

The components should be as dumb as posible, theres no reason for them to know
things that they don't need to know about.

Notice how containers don't render anything. They just pass props down to components.
Although this results in more files it helps keeping concerns separate to
each specific "Component". 
*/

import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors";

import WithSpinner from "../WithSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
