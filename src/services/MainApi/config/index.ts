import axios from "axios";

const baseApi = axios.create({

    baseURL:"http://127.0.0.1:3001",
    headers:{
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "http://localhost:3000/",
        //"Accept": "application/json",
        //"Access-Control-Allow-Headers": "X-Requested-With",
        //"reference":"react-scripts",
        //"crossDomain": true,
        //data: {id: 'test', command: 'echo hello'},
    },
});

export default baseApi;