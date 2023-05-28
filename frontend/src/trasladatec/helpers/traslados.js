import { trasladoApi } from "../../api/traslado.api"

export const getTraslados = async ( url = '') => {
    try {
        const { data } = await trasladoApi.get(`/${ url }`);
        return data;
    } catch (error) {
        console.log(error);
        return {
            ok: false
        }
    }
}

export const postTraslado = async ({ motivo, institutoDestino }) => {
    try {
        return await trasladoApi.post('/crear', {
            motivo, institutoDestino
        });
    } catch (error) {
        console.log(error);
    }
}

export const aceptarTraslado = async() => {
    try {
        await trasladoApi.put('/aceptar')
    } catch (error) {
        console.log();
    }
} 