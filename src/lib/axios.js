import axios from "axios";


const $axios= axios.create({
    baseURL:"http://localhost:8000",
    timeout: 5000,
});


export const BASEURL="http://localhost:8000"
export {$axios};