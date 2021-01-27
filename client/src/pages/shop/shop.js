import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import CollectionOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";
//import {convertCollectionSnapshotToMap,db,} from "../../firebase/firebase.util";
import "./shop.scss";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

//alternate loader
//import WithSpinner from "../../components/with-spinner/with-spinner";
import WithSpringLoader from "../../components/with-spinner/with-spring-loader";

const CollectionOverviewWithSpinner = WithSpringLoader(CollectionOverview);
const CollectionPageWithSpinner = WithSpringLoader(CollectionPage);

const ShopPage = ({
  fetchCollectionsStartAsync,
  match,
  isCollectionsLoaded,
}) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  //code base without redux thunk, note local state isLoading needs to be declared before using the code below
  //const collectionRef = db.collection("collections");
  //alternate method to fecth collections but it only collect the data and doesnt listen for any change
  /* collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    }); */
  /* this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        this.props.updateCollections(collectionsMap);
        this.setState({ isLoading: false });
      }
    ); */
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
