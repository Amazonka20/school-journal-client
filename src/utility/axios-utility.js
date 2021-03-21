import axios from "axios";

const instance = axios.create({
    // baseURL: "https://k2y9oghiva.execute-api.eu-central-1.amazonaws.com/dev",
    baseURL: "http://192.168.0.102:8080/",
});

export const saveToken = (token) => {
    axios.interceptors.request.use(req => {
        req.headers.authorization = token;
        return req;
    });
}

export default instance;