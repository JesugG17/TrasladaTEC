import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        estatus: 'no-autorizado', // 'no-autorizado', 'autorizado', 'checando'
        correo: null,
        tipo: null,
        token: null,
        errorMessage:null

    },
    reducers: {
        login: (state, {payload}) => {
            return {
                ...state,
                ...payload,
                estatus: 'autorizado',
                errorMessage: null
            }
        },
        logout: (state, {payload}) => {
            return {
                ...state,
                ...payload,
                correo: null,
                tipo: null,
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