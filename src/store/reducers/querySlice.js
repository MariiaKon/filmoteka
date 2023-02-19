import { createSlice } from '@reduxjs/toolkit';

export const querySlice = createSlice({
  name: 'query',
  initialState: '',
  reducers: {
    setQuery: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { setQuery } = querySlice.actions;
