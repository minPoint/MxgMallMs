import axios from 'axios'

let config = {
    timeout: 1000,
    // headers:{
    //     '':''
    // }
};


const _axios = axios.create(config);

_axios.interceptors.request.use(
    (config)=>{
        // Do something before request is sent
        console.log(config)
        return config;
    },
    (error)=>{
        // Do something with request error
        return error;
    }
);

_axios.interceptors.response.use(
    (response)=>{
        // Do something with response data
        return response;
    },
    (error)=>{
        return error;
    }
);

export default _axios;