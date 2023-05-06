import { authApi } from '../../api/auth.api'


export const logIn = async({ correo, contrasenia }) => {
    try {

        const resp = await authApi.post('/login', {
            correo, contrasenia
        });
        
        console.log(resp);

        if (!resp.ok) {
            throw new Error('Fallo en la autenticacion')
        }

        

        return {
            ok: true,

        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}