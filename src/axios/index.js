import axios from 'axios'
import {ElMessage} from "element-plus";

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
        // console.log(config)
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
        if (!(response.data && response.data.code === 0)){
            let msg = response.data && response.data.message ? response.data.message : "系统响应异常";
            ElMessage.error(msg);
        }
        return response;
    },
    (error)=>{
        return error;
    }
);

export default _axios;