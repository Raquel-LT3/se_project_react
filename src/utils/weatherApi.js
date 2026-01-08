// src/utils/weatherApi.js
import { apiKey, latitude, longitude } from "./constants";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getForecastWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(checkResponse);
};

const getWeatherCondition = (temperature) => {
  if (temperature >= 86) return "hot";
  if (temperature >= 66) return "warm";
  return "cold";
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = Math.round(data.main.temp);
  result.type = getWeatherCondition(result.temp);


  const currentTime = Math.floor(Date.now() / 1000); 
  const { sunrise, sunset } = data.sys;
  result.isDay = currentTime >= sunrise && currentTime < sunset;

  result.condition = data.weather[0].main.toLowerCase(); 

  return result;
};