import axios from "axios";

// THIS INSTANCE IS FOR GENERAL REQUEST TO API


export const trasaladaTecApi = axios.create({
    baseURL: 'http://localhost:8080/api/institutos'
});