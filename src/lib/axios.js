import axios from "axios";


const $axios= axios.create({
    baseURL:"https://portfolio-backend-m4t7.onrender.com",
    timeout: 5000,
});


export const BASEURL="https://portfolio-backend-m4t7.onrender.com"
export {$axios};