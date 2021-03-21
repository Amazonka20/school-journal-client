import axios from "axios";

const instance = axios.create({
    baseURL: "https://k2y9oghiva.execute-api.eu-central-1.amazonaws.com/dev/api",
});

export default instance;