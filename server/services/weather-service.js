const axios = require("axios");

class WeatherService {
  findWeather(citiesQuery) {
    const key = process.env.WEATHER_API_KEY;
    return axios
      .post(`http://api.weatherapi.com/v1/current.json?key=${key}&q=bulk`, {
        locations: citiesQuery,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
}

module.exports = new WeatherService();
