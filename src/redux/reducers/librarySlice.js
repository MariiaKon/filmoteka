import { createSlice } from '@reduxjs/toolkit';

export const librarySlice = createSlice({
  name: 'libraryLists',
  initialState: {
    watchedList: [],
    queueList: [],
  },
  reducers: {
    addToWatchedList: (state, action) => {
      state.watchedList = [...state.watchedList, action.payload];
    },
    removeFromWatchedList: (state, action) => {
      state.watchedList = state.watchedList.filter(
        movie => movie.id !== action.payload
      );
    },
    addToQueueList: (state, action) => {
      state.queueList = [...state.queueList, action.payload];
    },
    removeFromQueueList: (state, action) => {
      state.queueList = state.queueList.filter(
        movie => movie.id !== action.payload
      );
    },
  },
});

export const {
  addToWatchedList,
  removeFromWatchedList,
  addToQueueList,
  removeFromQueueList,
} = librarySlice.actions;
