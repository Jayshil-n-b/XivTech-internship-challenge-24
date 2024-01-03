const express = require("express");
const router = express.Router();
const weatherController = require("./controllers/weather-controller");

router.post("/getWeather", weatherController.findWeathers);

module.exports = router;
