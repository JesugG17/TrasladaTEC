import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        estatus: 'no-autorizado', // 'no-autorizado', 'autorizado', 'checando'
        nombre: null,
        apellidoMat: null,
        apellidoPat: null,
        correo: null,
        carrera: null,
        departamento: null,
        rol: null,
        instituto: null,
        semestre: null,
        promedio: null,
        esRegular: null,
        errorMessage: null

    },
    reducers: {
        login: (state, payload) => {
            return {
                ...state
            }
        },
        logout: (state, payload) => {
            return {
                ...state
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