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
  
  // Get the raw Fahrenheit from the API
  const tempF = data.main.temp;
  
  // Create an object with both units
  result.temp = {
    F: Math.round(tempF),
    C: Math.round((tempF - 32) * 5 / 9), // Formula for Celsius
  };

  // Update getWeatherCondition to look at result.temp.F
  result.type = getWeatherCondition(result.temp.F);

  const currentTime = Math.floor(Date.now() / 1000); 
  const { sunrise, sunset } = data.sys;
  result.isDay = currentTime >= sunrise && currentTime < sunset;

  result.condition = data.weather[0].main.toLowerCase(); 

  return result;
};