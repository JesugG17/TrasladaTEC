import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore';
import { studentSlice } from './student/studentSlice';

const authConfig = {
    key: 'auth',
    storage
}

const studentConfig = {
    key: 'student',
    storage
}


const persistedAuthReducer = persistReducer(authConfig, authSlice.reducer);
const persistedStudentReducer = persistReducer(studentConfig, studentSlice.reducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        student: persistedStudentReducer
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);
