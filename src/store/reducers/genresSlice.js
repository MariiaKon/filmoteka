import { createSlice } from '@reduxjs/toolkit';

export const genresSlice = createSlice({
  name: 'genresList',
  initialState: { genres: [] },
  reducers: {
    setGenres: (state, { payload }) => {
      state.genres = payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;
