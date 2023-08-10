import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://skon.mn/",

    headers:{
        "Content-Type": "application/json",
    }
});

axios.defaults.withCredentials = true;

const callGet = async (url) => {
    return await axiosInstance.get(url);
}