import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
    key: 'root',
    storage
}

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);
