import { checandoCredenciales, login, logout } from './authSlice'

export const startLogInWithEmailAndPassword = (result) => {
    return (dispatch) => {
        dispatch(checandoCredenciales());

        if (!result.ok) {
            return dispatch(logout(result));
        }
        const { correo, url, token } = result.usuario;

        dispatch(login({ correo, url, token }));
    }
}