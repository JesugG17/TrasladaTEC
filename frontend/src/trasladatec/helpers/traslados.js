import { trasladoApi } from "../../api/traslado.api"

export const getTraslados = async (correo = '') => {
    try {
        const { data } = await trasladoApi.get(`/${correo}`);
        return data;
    } catch (error) {
        console.log('algo ta mal');
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