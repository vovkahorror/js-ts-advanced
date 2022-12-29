import axios from 'axios';

const configOMB = {
    baseURL: 'https://www.omdbapi.com/',
};
const key = 'e0ebc1f3';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?apikey=${key}&t=${title}`).then(response => response.data);
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`?apikey=${key}&t=${title}&type=${type}`).then(response => response.data);
    },
};


export default API;
