import axios from "axios";


const $axios= axios.create({
    baseURL:"https://portfoliobackend-tzh8.onrender.com",
    timeout: 5000,
});


export const BASEURL="https://portfoliobackend-tzh8.onrender.com"
export {$axios};