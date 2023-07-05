import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    estatus: 'no-autorizado', // 'no-autorizado', 'autorizado', 'checando'
    token: null,
    errorMessage:null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        estatus: 'no-autorizado', // 'no-autorizado', 'autorizado', 'checando'
        token: null,
        errorMessage:null
    },
    reducers: {
        login: (state, {payload}) => {
            return {
                ...state,
                ...payload,
                estatus: 'autorizado',
                // tipo: payload.url,
                errorMessage: null
            }
        },
        logout: (state, {payload}) => {
            return {
                ...state,
                ...payload,
                token: null,
                estatus: 'no-autorizado'
            }
        },
        checandoCredenciales: (state) => {
            return {
                ...state,
                estatus: 'checando'
            };
        },
        resetAuthState: (state) => {
            state.estatus = 'no-autorizado', // 'no-autorizado', 'autorizado', 'checando'
            state.token = null,
            state.errorMessage =null
                
        }
    }
});

export const { checandoCredenciales, login, logout, resetAuthState } = authSlice.actions;