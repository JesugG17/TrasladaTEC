import { trasaladaTecApi } from "../../api/trasladatec.api"

export const getInstitutos = async( correo ) => {
    try {

        const { data } = await trasaladaTecApi.get(`/${correo}`);
        return data
    } catch (error) {

    }
}