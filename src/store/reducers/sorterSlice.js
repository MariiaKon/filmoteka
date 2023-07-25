import { createSlice } from '@reduxjs/toolkit';

export const sorterSlice = createSlice({
  name: 'sorter',
  initialState: { sort_by: '', with_genres: '' },
  reducers: {
    setSorter: (state, { payload }) => {
      state.sort_by = payload.sort_by;
      state.with_genres = payload.with_genres;
    },
  },
});

export const { setSorter } = sorterSlice.actions;
