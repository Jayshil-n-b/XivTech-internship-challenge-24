const weatherService = require("../services/weather-service");

class WeatherController {
  async findWeathers(req, res) {
    const { cities } = req.body;
    const citiesQuery = [];
    cities.forEach((city) => {
      citiesQuery.push({ q: city });
    });
    const weather = await weatherService.findWeather(citiesQuery);
    const weatherOutput = { weather: {} };
    weather.bulk.forEach((out) => {
      if (out.query.location) {
        const city = out.query.location.name;
        const newPair = { [city]: out.query.current.temp_c };
        weatherOutput.weather = { ...weatherOutput.weather, ...newPair };
      }
    });
    res.send(weatherOutput);
  }
}

module.exports = new WeatherController();
