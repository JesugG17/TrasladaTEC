import { logIn } from '../../auth/helpers/login';
import { checandoCredenciales, login, logout } from './authSlice'

export const startLogInWithEmailAndPassword = (usuario) => {
    return async(dispatch) => {
        dispatch(checandoCredenciales());


        const result = await logIn(usuario);
        console.log(result);
        if (!result.ok) {
            return dispatch( logout(result) );
        }
        const { correo, tipo } = result.usuario;

    
        dispatch(login({correo, tipo}));
    }
}