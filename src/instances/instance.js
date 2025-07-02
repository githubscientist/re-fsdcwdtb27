/*
    axios instance: axios instance is used to create a reusable axios instance with default configurations.
*/
import axios from "axios";

// define the base URL for the axios instance
const baseURL = "https://685ac3af9f6ef9611157b188.mockapi.io";

// create an axios instance with default configurations
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    timeout: 5000 // set a timeout of 5 seconds
});

export default instance;