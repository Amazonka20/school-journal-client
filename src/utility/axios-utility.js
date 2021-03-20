import axios from "axios";

const instance = axios.create({
    baseURL: "http://192.168.0.102:8080",
});

export const saveToken = (token) => {
    axios.interceptors.request.use(req => {
        // `req` is the Axios request config, so you can modify
        // the `headers`.
        req.headers.authorization = token;
        return req;
    });
}

export default instance;