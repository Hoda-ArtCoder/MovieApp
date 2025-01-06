import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [], // List of favorite movies
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const movie = action.payload;
      if (!state.favorites.find((fav) => fav.id === movie.id)) {
        state.favorites.push(movie); // Add movie to favorites
      }
    },
    removeFromFavorite: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.id !== movieId); // Remove movie from favorites by id
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
