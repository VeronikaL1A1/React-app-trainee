import axios from "axios"

const axiosInstance = axios.create ({baseURL:"https://anime-page-6d6f8.firebaseio.com"});

export default axiosInstance;