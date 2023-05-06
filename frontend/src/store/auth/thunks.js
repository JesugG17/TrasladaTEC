import { logIn } from '../../auth/helpers/login';
import { checandoCredenciales, login, logout } from './authSlice'

export const startLogInWithEmailAndPassword = (usuario) => {
    return async(dispatch) => {
        dispatch(checandoCredenciales());


        // const result = await logIn(usuario);

        // if (!result.ok) {
        //     return dispatch( logout(result) );
        // }

        // dispatch(login(result));
    }
}