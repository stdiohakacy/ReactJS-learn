import { createSelector } from "reselect";

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionURLParam => {
    return createSelector(
        [selectCollections],
        collections => { return collections.find(collection => collection.routeName === collectionURLParam) }
    )
}

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)