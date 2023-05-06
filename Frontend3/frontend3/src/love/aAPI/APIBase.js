import axios from 'axios';


const APIBase = (props) => {
    // Request Configuration
    const configuration = {
        method: props.method,
        url: props.url,
        baseURL: (
            process.env.REACT_APP_ACTIVE_APP === "PersonalPortfolioApp" ? "https://ac-personal-portfolio-app.onrender.com" : 
            process.env.REACT_APP_ACTIVE_APP === "NehaPortfolioApp" ? "https://ac-neha-portfolio-app.onrender.com" :
            process.env.REACT_APP_ACTIVE_APP === "AnushreePortfolioApp" ? "https://ac-anushree-portfolio-app.onrender.com" :
            "https://ac-personal-portfolio-app.onrender.com"
        ),
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
