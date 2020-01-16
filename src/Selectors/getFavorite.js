const favoriteIdCreator = (id, type) => {
  return `${type}_${id}`;
};
export const getFavorite = (state, id, type) => {
  if (!id || !type) {
    return false;
  }
  return state.favorites.hasOwnProperty(favoriteIdCreator(id, type));
};
