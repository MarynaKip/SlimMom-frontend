import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import process from 'process';
// import logger from 'redux-logger';
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
import registration from './auth/auth-reducers';
import currentDateData from './sidebar/sidebar-reducers';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    // logger,
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        userCurrentDate: currentDateData,
        // userChosenDate: chosenDateData,
        auth: persistReducer(authPersistConfig, registration),
    },
    middleware,
    // devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
