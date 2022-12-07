import { createSlice } from '@reduxjs/toolkit';

export const genresSlice = createSlice({
  name: 'genresList',
  initialState: { genres: [] },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;
