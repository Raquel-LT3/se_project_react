// src/utils/weatherApi.js
import { apiKey, latitude, longitude } from "./constants";

import { handleServerResponse } from "./api";

export const getForecastWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(handleServerResponse);
};

const getWeatherCondition = (temperature) => {
  if (temperature >= 86) return "hot";
  if (temperature >= 66) return "warm";
  return "cold";
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;

  const tempF = data.main.temp;
  result.temp = {
    F: Math.round(tempF),
    C: Math.round(((tempF - 32) * 5) / 9),
  };

  result.type = getWeatherCondition(result.temp.F);

  // Determine if it's day or night based on sunrise and sunset times
  const { sunrise, sunset } = data.sys;
  const currentTime = data.dt;
  result.isDay = currentTime >= sunrise && currentTime < sunset;

  // Get the main weather condition
  result.condition = data.weather[0].main.toLowerCase();

  return result;
};
