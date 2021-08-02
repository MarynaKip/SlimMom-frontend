import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import process from 'process';
import logger from 'redux-logger';
import contactsReducer from '../redux/diaryData/contacts-reducer';
import { authReducer } from './auth';

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
import modalReducer from './modal/modal-reducers';
import registration from './auth/auth-reducers';
import currentDateData from './sidebar/sidebar-reducers';

const devtols =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    //   userCurrentDate: currentDateData,
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    modal: modalReducer,
  },
  middleware,
  devtols,
  //   devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
