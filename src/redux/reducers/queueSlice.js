import { createSlice } from '@reduxjs/toolkit';

export const queueSlice = createSlice({
  name: 'queueList',
  initialState: [],
  reducers: {
    addToQueueList: (state, action) => {
      return [...state, action.payload];
    },
    removeFromQueueList: (state, action) => {
      return state.filter(movie => movie.id !== action.payload);
    },
  },
});

export const { addToQueueList, removeFromQueueList } = queueSlice.actions;
