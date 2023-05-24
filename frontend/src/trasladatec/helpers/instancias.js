import { trasladoApi, usuarioApi } from "../../api";

export const inicializarInstancias = (token) => {
    trasladoApi.defaults.headers.common["x-token"] = token;
    usuarioApi.defaults.headers.common["x-token"] = token;
}