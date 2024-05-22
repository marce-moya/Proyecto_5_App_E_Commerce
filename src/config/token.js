import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

axiosClient.interceptors.request.use(    //para ejecutar antes de la solicitud
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            
            config.headers['Authorization'] = `Bearer ${token}`;  // Si hay un token almacenado en el local storage, se agrega a los encabezados de la solicitud
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosClient;