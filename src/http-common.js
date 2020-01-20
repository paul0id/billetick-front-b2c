import axios from 'axios';

export const HTTP = axios.create({
    baseURL: "https://billetick.herokuapp.com/public/api/"
    // headers: {
    //     "Access-Control-Allow-Origin": "*"
    // }
})
