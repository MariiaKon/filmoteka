import { createSlice } from '@reduxjs/toolkit';

export const searchPathSlice = createSlice({
  name: 'searchPath',
  initialState: '',
  reducers: {
    setSearchPath: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { setSearchPath } = searchPathSlice.actions;
