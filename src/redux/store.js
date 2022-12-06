import { configureStore } from '@reduxjs/toolkit';

import { querySlice } from './reducers/querySlice';
import { pageSlice } from './reducers/pageSlice';
import { queueSlice } from './reducers/queueSlice';
import { watchedSlice } from './reducers/watchedSlice';

const store = configureStore({
  reducer: {
    [querySlice.name]: querySlice.reducer,
    [pageSlice.name]: pageSlice.reducer,
    [queueSlice.name]: queueSlice.reducer,
    [watchedSlice.name]: watchedSlice.reducer,
  },
});

export default store;
