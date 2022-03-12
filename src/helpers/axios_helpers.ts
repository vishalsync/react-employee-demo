// Third party packages
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/customer/v1"
});


export default axiosInstance;
