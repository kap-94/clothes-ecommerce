import { shopActionTypes } from "./shopTypes";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionError(error.message)));

    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // }); // onSnapshot runs whenever the collection updates or runs for the first time
  };
};

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionError = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_ERROR,
  payload: errorMessage,
});
