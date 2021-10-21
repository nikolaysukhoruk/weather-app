import networkClient from './networkClient';

const API_KEY = '79f6a5d168d436bd930c453b0eaa67ad';

class WeatherApi {
  static async getWeather(latitude, longitude) {
    return networkClient.get(`?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
  }
}

export default WeatherApi;
