import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState: 1,
  reducers: {
    setPage: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { setPage } = pageSlice.actions;
