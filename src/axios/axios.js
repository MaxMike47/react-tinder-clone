
import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:4000',
    baseURL: 'https://tinder-clone-backendserver.herokuapp.com',
});

export default instance;