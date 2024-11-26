import axios from "axios";

export const getBaseUrl = () => {
    return Bun.env.MYKU_API_URL;
};

export const axiosAPI = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        "app-key": Bun.env.MYKU_APP_KEY,
    },
});
