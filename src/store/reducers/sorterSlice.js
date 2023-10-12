import { createSlice } from '@reduxjs/toolkit';

export const sorterSlice = createSlice({
  name: 'sorter',
  initialState: { sort_by: '', with_genres: '' },
  reducers: {
    setSorter: (state, { payload }) => {
      if (payload.sort_by || payload.sort_by === '') {
        return state = {...state, sort_by: payload.sort_by}
      } else if (payload.with_genres) { 
        return state = {...state, with_genres: payload.with_genres.toString()}
      } 
    },
  },
});

export const { setSorter } = sorterSlice.actions;
