import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";
import {
  convertCollectionSnapshotToMap,
  db,
} from "../../firebase/firebase.util";
import "./shop.scss";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

//alternate loader
//import WithSpinner from "../../components/with-spinner/with-spinner";
import WithSpringLoader from "../../components/with-spinner/with-spring-loader";

const CollectionOverviewWithSpinner = WithSpringLoader(CollectionOverview);
const CollectionPageWithSpinner = WithSpringLoader(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const collectionRef = db.collection("collections");

    //alternate method to fecth collections but it only collect the data and doesnt listen for any change
    /* collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    }); */

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        this.props.updateCollections(collectionsMap);
        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
