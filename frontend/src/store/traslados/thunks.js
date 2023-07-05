import { usuarioApi } from "../../api";
import { getTraslados } from "../../trasladatec/helpers/traslados";
import { initTraslados, setEstudiante } from "./trasladosSlice";


export const startChargeStudent = () => {
    return async(dispatch) => {
        const { data } = await usuarioApi.get("/estudiante");
        dispatch(setEstudiante(data));
    }
}

export const startChargeTraslados = ( url = '' ) => {
    return async(dispatch) => {
        const data = await getTraslados(url);
        dispatch(initTraslados(data));
    }
}