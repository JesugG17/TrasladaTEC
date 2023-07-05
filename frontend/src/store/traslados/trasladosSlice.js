import { createSlice } from '@reduxjs/toolkit';

export const trasladoSlice = createSlice({
    name: 'traslado',
    initialState: {
        estudiante: null,
        traslados: [],
    },
    reducers: {
        setEstudiante: (state, {payload}) => {
            state.estudiante = payload;
        },
        initTraslados: (state, {payload}) => {
            state.traslados = payload;
        }
    }
});

export const {
    initTraslados, 
    setEstudiante,
} = trasladoSlice.actions;