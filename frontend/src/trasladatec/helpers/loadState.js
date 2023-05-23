import { login } from "../../store/auth/authSlice";


export const loadState = (state, dispatch) => {

    const savedState = JSON.parse(localStorage.getItem('state'));
    if (!savedState) {
        localStorage.setItem('state', JSON.stringify(state));
        dispatch(login(state));
        return;
    }

    dispatch(login(savedState));

}