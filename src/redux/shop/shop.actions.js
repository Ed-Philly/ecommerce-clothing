import { ShopActionTypes } from "./shop.type";

export const updateCollections = (collections) => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload: collections,
});
