import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

/* this converts our collections onject to array so we can do .map on it inside our CollectionsOverview component */
export const selectCollectionsForPreview = createSelector(             
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);


export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  ); 