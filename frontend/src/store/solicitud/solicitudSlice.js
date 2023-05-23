import { createSlice } from '@reduxjs/toolkit';

export const solicitudSlice = createSlice({
    name: 'solicitud',
    initialState: {
        traslados: []
    },
    reducers: {
        setTraslados: (state, {payload} ) => {
            return {
                ...state,
                ...payload
            }
        }
    }
});

export const { setTraslados } = solicitudSlice.actions;