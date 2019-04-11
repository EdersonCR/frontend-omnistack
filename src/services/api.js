import axios from 'axios';

const api = axios.create({
  baseURL: 'https://feio-omnistack-backend.herokuapp.com'
});

export default api; 