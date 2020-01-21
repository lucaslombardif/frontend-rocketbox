import axios from 'axios';

const api = axios.create({
    baseURL: 'https://box.lucaslombardif.codes'
});

export default api;