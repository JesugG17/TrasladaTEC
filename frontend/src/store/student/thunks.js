import { usuarioApi } from "../../api";
import { getInstitutos } from "../../trasladatec/helpers/institutos";
import { getTraslados, postTraslado } from "../../trasladatec/helpers/traslados";
import { setStudent, initTransfers, setInstitutesToTransfer, setStudentDebit, setErrorMessage, createNewTransfer } from "./studentSlice";

export const startChargeStudent = () => {
    return async (dispatch) => {
        const { data } = await usuarioApi.get("/estudiante");
        dispatch(setStudent(data));
    }
}

export const startChargeTransfers = (url = '') => {
    return async (dispatch) => {
        const data = await getTraslados(url);
        dispatch(initTransfers(data));
    }
}

export const creatingNewTransfer = (motivo, instituto) => {
    return async (dispatch) => {
        const { data } = await postTraslado({
            motivo,
            institutoDestino: instituto,
        });

        if (!data.ok) {
            return dispatch(setErrorMessage(data.error));
        }

        dispatch(createNewTransfer(data.traslado));
    
    }
}

export const startChargingInstitutes = () => {
    return async (dispatch, getState) => {
        const { correo } = getState().student.info;
        const data = await getInstitutos(correo);
        const institutosDisponibles = data.map(instituto => instituto.instNombre);

        dispatch(setInstitutesToTransfer(institutosDisponibles));
    }
}

export const startCheckingStudentDebit = () => {
    return async (dispatch) => {
        const { data } = await usuarioApi.get('/adeudo');
        dispatch(setStudentDebit(data.adeudo));
    }
}