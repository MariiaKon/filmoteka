import { createSlice } from '@reduxjs/toolkit';

export const watchedSlice = createSlice({
  name: 'queueList',
  initialState: [],
  reducers: {
    addWatchedList: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addWatchedList } = watchedSlice.actions;
