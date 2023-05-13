import { authApi } from '../../api/auth.api'


export const logIn = async ({ correo, contrasenia }) => {
    try {

        const { data } = await authApi.post('/login', {
            correo, contrasenia
        });
        if (!data.ok) {
            return {
                ok: false,
                error: 'Error al momento de autenticarse'
            };
        }

        return {
            usuario: data,
            ok: true,
            error: null
        }   

    } catch (error) {
        return {
            ok: false,
            errorMessage: 'Credenciales incorrectas'
        }
    }
}