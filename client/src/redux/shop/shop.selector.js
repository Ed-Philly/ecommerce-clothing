import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollectionItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollectionItems], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectCollectionItems],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
