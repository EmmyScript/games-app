import axios from "axios";

 export default axios.create({ 
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a984bba7feaf49a3b8f034fa90427ff8'
    }
})