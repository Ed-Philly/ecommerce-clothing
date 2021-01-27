import { ShopActionTypes } from "./shop.type";

const INITIAL_STATE = {
  collections: null,
  isFecthing: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFecthing: true,
        errorMessage: undefined,
      };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFecthing: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFecthing: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
