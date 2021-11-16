import { shopActionTypes } from "./shopTypes";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: "undefined",
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case shopActionTypes.FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
