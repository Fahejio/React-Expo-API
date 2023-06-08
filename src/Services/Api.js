import axios from 'axios';

const api = axios.create({
    baseURL: 'http:/Coloque seu Endereço IP:3000/'
});

export default api;