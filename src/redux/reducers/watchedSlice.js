import { createSlice } from '@reduxjs/toolkit';

export const watchedSlice = createSlice({
  name: 'watchedList',
  initialState: [],
  reducers: {
    addToWatchedList: (state, action) => {
      return [...state, action.payload];
    },
    removeFromWatchedList: (state, action) => {
      return state.filter(movie => movie.id !== action.payload);
    },
  },
});

export const { addToWatchedList, removeFromWatchedList } = watchedSlice.actions;
