import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-bowl-builder.firebaseio.com/'
});

export default axiosInstance;