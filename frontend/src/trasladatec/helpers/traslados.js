import { trasladoApi } from "../../api/traslado.api"

export const getTraslados = async () => {
    try {
        const { data } = await trasladoApi.get('/estudiante');
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