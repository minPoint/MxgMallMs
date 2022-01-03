import axios from "../../axios";
import BaseUtils from "./BaseUtils";


class Network {

    GET = (url,params) =>{
        return new Promise((resolve, reject) => {
            axios.get(url, {params},{} )
                .then((response)=>{
                    resolve(response.data.data);
                })
        });
    };
    POST = (url, params) => {
        return new Promise((resolve, reject) => {
            axios.post(url, params, {})
                .then((response) => {
                    resolve(response.data.data);
                })
        });
    }
}


export default Network;