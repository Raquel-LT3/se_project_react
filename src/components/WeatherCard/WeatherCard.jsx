// src/components/WeatherCard/WeatherCard.jsx

import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData.temp?.[currentTemperatureUnit] || 0;

  const weatherOption = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const imageSrcUrl = weatherOption ? weatherOption.url : "";
  const currentTemp = weatherData.temp?.[currentTemperatureUnit];

  return (
   <section className="weather-card">
    {/* Use the new 'temp' variable here */}
    <p className="weather-card__temp">{temp} &deg; {currentTemperatureUnit}</p>
    <img
      src={imageSrcUrl}
      alt={`Weather is ${weatherData.condition}`}
      className="weather-card__image"
    />
  </section>
  );
}

export default WeatherCard;
