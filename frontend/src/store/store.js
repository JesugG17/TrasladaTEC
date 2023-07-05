import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore';
import { trasladoSlice } from './traslados/trasladosSlice';

const persistConfig = {
    key: 'root',
    storage
}

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);
const persistedTrasladoReducer = persistReducer(persistConfig, trasladoSlice.reducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        traslado: persistedTrasladoReducer
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);
