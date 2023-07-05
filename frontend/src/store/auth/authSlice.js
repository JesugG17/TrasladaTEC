import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        estatus: 'no-autorizado', // 'no-autorizado', 'autorizado', 'checando'
        token: null,
        errorMessage:null,
        url: null
    },
    reducers: {
        login: (state, {payload}) => {
            state.estatus = 'autorizado';
            state.token = payload.token;
            state.errorMessage = payload.errorMessage;
            state.url = payload.url
        },
        logout: (state, {payload}) => {
            return {
                ...state,
                ...payload,
                token: null,
                estatus: 'no-autorizado'
            }
        },
        checkingCredentials: (state) => {
            return {
                ...state,
                estatus: 'checando'
            };
        },
    }
});

export const { 
    checkingCredentials, 
    login, 
    logout,
} = authSlice.actions;