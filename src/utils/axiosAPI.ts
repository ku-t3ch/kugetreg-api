import axios from "axios";

export const getBaseUrl = () => {
    return process.env.MYKU_API_URL;
};

export const axiosAPI = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        "app-key": process.env.MYKU_APP_KEY,
    },
});
