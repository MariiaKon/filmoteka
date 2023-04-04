import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { genresSlice } from './reducers/genresSlice';
import { querySlice } from './reducers/querySlice';
import { pageSlice } from './reducers/pageSlice';
import { librarySlice } from './reducers/librarySlice';
import { searchPathSlice } from './reducers/searchPathSlice';

const persistConfigGenres = {
  key: 'genresList',
  storage,
};
const persistConfigLibrary = {
  key: 'libraryLists',
  storage,
};

export const store = configureStore({
  reducer: {
    [genresSlice.name]: persistReducer(
      persistConfigGenres,
      genresSlice.reducer
    ),
    [querySlice.name]: querySlice.reducer,
    [pageSlice.name]: pageSlice.reducer,
    [searchPathSlice.name]: searchPathSlice.reducer,
    [librarySlice.name]: persistReducer(
      persistConfigLibrary,
      librarySlice.reducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
