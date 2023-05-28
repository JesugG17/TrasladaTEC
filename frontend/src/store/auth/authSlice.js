import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        estatus: 'no-autorizado', // 'no-autorizado', 'autorizado', 'checando'
        correo: null,
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
                correo: null,
                token: null,
                estatus: 'no-autorizado'
            }
        },
        checandoCredenciales: (state) => {
            return {
                ...state,
                estatus: 'checando'
            };
        }
    }
});

export const { checandoCredenciales, login, logout } = authSlice.actions;