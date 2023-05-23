import { getTraslados } from "../../trasladatec/helpers/traslados"
import { setTraslados } from "./solicitudSlice";


export const obteniendoTraslados = ( correo ) => {
    return async(dispatch) => {

        const result = await getTraslados(correo);

        // TODO: SEGUIR HACIENDO EL THUNK
        setTraslados(result);

    }
}