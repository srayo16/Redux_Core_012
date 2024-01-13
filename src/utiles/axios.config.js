import axios from "axios";

let URL;
switch (process.env.REACT_APP_NODE_ENV) {
    case "DEV":
        URL = "";
        break;
    case "PROD":
        URL = "";
        break;
    default:
        URL = "";
}

const instance = axios.create({
    baseURL: URL,
});
instance.defaults.headers.common['Authorization'] = process.env.REACT_APP_TOKEN_KEY;

export default instance;