import axios from 'axios';


const APIBase = (props) => {
    // Request Configuration
    const configuration = {
        method: props.method,
        url: props.url,
        baseURL: "http://localhost:4000",
        // baseURL: "https://personal-portfolio-app-backend.onrender.com",
        headers: { 
            'Content-Type': 'application/json',
        },
        withCredentials: true
    }

    // Request Data
    if (props.method === "POST" || props.method === "PUT") {
        configuration.data = props.data;
    }

    // Request Params
    if (props.method === "GET") {
        configuration.params = props.params;
    }

    // Return Request
    return axios(configuration)
}

export default APIBase
