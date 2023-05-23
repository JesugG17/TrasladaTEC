import axios from "axios";

export const trasladoApi = axios.create({
    baseURL: 'http://localhost:8080/api/traslados'
})