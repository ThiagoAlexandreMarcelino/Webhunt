import axios from 'axios';

const api = axios.create({baseURL:'https://api-rest-produtos-nodejs.herokuapp.com/api'});

export default api;
