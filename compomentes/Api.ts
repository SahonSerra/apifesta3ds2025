import axios from "axios";


const api = axios.create({
  baseURL: 'https://jussimarleal.com.br/apievento/public/',
});

export default axios;