// src/components/WeatherCard/WeatherCard.jsx

import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });


  const imageSrcUrl = weatherOption ? weatherOption.url : "";

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp} &deg; F</p>
      <img
        src={imageSrcUrl}
        alt={`Weather is ${weatherData.condition}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;