import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/' ,
    
    // withCredentials: true
});

export default instance;

// export const wait = (ms) => {
//     return new Promise((res) => setTimeout(res, ms));
// };



