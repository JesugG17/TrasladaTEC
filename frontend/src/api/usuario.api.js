import axios from "axios";

export const usuarioApi = axios.create({
    baseURL: 'http://localhost:8080/api/usuarios'
})