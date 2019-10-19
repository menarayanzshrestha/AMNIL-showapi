import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

const request = (url, method = "get", data = {}, headers = {}) => {

    switch(method) {

        case "get":

            return axios.get(url, {});

        case "post":
        
            return axios.post(url, data, headers, {});

        case "put":

            return axios.put(url, data, headers, {});

        case "patch":

            return axios.patch(url, data, headers, {});
        
        case "delete":
    
            return axios.delete(url, headers);

        default:    

    }
}

export default request;