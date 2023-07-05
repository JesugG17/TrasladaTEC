import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
    name: 'traslado',
    initialState: {
        info: null,
        transfers: [],
        errorMessage: null,
        institutesToTransfer: [],
        debit: false
    },
    reducers: {
        setStudent: (state, {payload}) => {
            state.info = payload;
        },
        initTransfers: (state, {payload}) => {
            state.transfers = payload;
        },
        setInstitutesToTransfer: (state, {payload}) => {
            state.errorMessage = ''
            state.institutesToTransfer = payload;
        },
        setStudentDebit: (state, {paloyad}) => {
            state.debit = payload;
        },
        createNewTransfer: (state, {payload}) => {
            state.transfers.push(payload);
        },
        setErrorMessage: (state, {payload}) => {
            state.errorMessage = payload;
        },
        resetStudentState: (state) => {
            state.info = null,
            state.transfers = [],
            state.errorMessage = null,
            state.institutesToTransfer = [],
            state.debit = false
        
        }
    }
});

export const {
    createNewTransfer,
    initTransfers, 
    resetStudentState,
    setErrorMessage,
    setInstitutesToTransfer,
    setStudent,
    setStudentDebit,
} = studentSlice.actions;