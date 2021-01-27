import { ShopActionTypes } from "./shop.type";
import {
  db,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.util";

export const updateCollections = (collections) => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload: collections,
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: error,
});

//using thunk to make async calls to fecth for shop data at different state i.e start,sucess and failure

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = db.collection("collections");

    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((err) => dispatch(fetchCollectionsFailure(err)));
  };
};
