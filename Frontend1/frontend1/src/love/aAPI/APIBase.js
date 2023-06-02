import axios from 'axios';


const APIBase = (props) => {
    // Request Configuration
    const configuration = {
        method: props.method,
        url: props.url,
        // baseURL: "http://localhost:4000",
        baseURL: "https://ac-sample-authentication-app.onrender.com",
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
        withCredentials: true,
        credentials: 'include'
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
