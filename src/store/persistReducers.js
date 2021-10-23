import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'appKey',
      storage,
      whiteList: ['auth', 'user'], // Only persists the reducers inside the whiteList
    },
    reducers
  );

  return persistedReducer;
};
