import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore';
import { studentSlice } from './student/studentSlice';


const persistedConfigs = {
    student: {
        key: 'student',
        storage
    },
    auth: {
        key: 'auth',
        storage
    }
}


const persistedAuthReducer = persistReducer(persistedConfigs.auth, authSlice.reducer);
const persistedStudentReducer = persistReducer(persistedConfigs.student, studentSlice.reducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        student: persistedStudentReducer
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);
