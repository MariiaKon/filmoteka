import { createSlice } from '@reduxjs/toolkit';

export const queueSlice = createSlice({
  name: 'queueList',
  initialState: [],
  reducers: {
    addQueueList: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addQueueList } = queueSlice.actions;
