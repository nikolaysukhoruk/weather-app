import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/weather';

export default {
  get: (url) => axios.get(url),
}
