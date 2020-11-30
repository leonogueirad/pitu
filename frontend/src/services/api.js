import axios from 'axios';

const baseAPI = (baseURL) => {
    const api = axios.create({
        baseURL, 
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    });
    return api;
}

export default baseAPI;