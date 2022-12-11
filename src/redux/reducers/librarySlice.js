import { createSlice } from '@reduxjs/toolkit';

export const librarySlice = createSlice({
  name: 'libraryLists',
  initialState: {
    watchedList: [],
    queueList: [],
  },
  reducers: {
    addToWatchedList: (state, { payload }) => {
      state.watchedList = [payload, ...state.watchedList];
    },
    removeFromWatchedList: (state, { payload }) => {
      state.watchedList = state.watchedList.filter(
        movie => movie.id !== payload
      );
    },
    addToQueueList: (state, { payload }) => {
      state.queueList = [payload, ...state.queueList];
    },
    removeFromQueueList: (state, { payload }) => {
      state.queueList = state.queueList.filter(movie => movie.id !== payload);
    },
  },
});

export const {
  addToWatchedList,
  removeFromWatchedList,
  addToQueueList,
  removeFromQueueList,
} = librarySlice.actions;
