import axios from 'axios';

export const HTTP = axios.create({
    baseURL: "http://83.166.241.101:7777/public/api"
    // headers: {
    //     "Access-Control-Allow-Origin": "*"
    // }
})