import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-six.herokuapp.com'
});

export default api;