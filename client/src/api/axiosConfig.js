import axios from "axios";
import {BASE_URL} from "./endpoints.js";

const APIResource = axios.create()

APIResource.interceptors.request.use((config) => {
    config.url = `${BASE_URL}${config.url}`
    return config;

}, (error) => {
    return Promise.reject(error)
})

export {APIResource}