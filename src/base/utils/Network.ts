import axios from "../../axios";
import BaseUtils from "./BaseUtils";
import {ElMessage} from "element-plus";


class Network {

    constructor() {
    }

    static GET = (url : String,params : any) =>{
        return new Promise((resolve, reject) => {
            axios.get(url, {params},{} )
                .then((response)=>{
                    if(response.data){
                        resolve(response.data.data);
                    }
                })
        });
    };
    static POST = (url : String, params : any) => {
        return new Promise((resolve, reject) => {
            axios.post(url, params, {})
                .then((response) => {
                    if(response.data){
                        resolve(response.data.data);
                    }
                })
        });
    };

    // static DELETE = (url : String, params : any) => {
    //     return new Promise((resolve, reject) => {
    //         axios.delete(url, {params}, {})
    //             .then((response) => {
    //                 if(response.data){
    //                     resolve(response.data.data);
    //                 }
    //             })
    //     });
    // }
}

export default Network;