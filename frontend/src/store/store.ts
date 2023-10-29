import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import pricesSlice from './pricesSlice';
import thunkMiddleware from 'redux-thunk';
import stocksSlice from '@/store/stocksSlice';
import priceHistorySlice from '@/store/priceHistorySlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pricesSlice.name]: pricesSlice.reducer,
    [stocksSlice.name]: stocksSlice.reducer,
    [priceHistorySlice.name]: priceHistorySlice.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunkMiddleware])
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
