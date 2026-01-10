// src/components/Main/Main.jsx
import { useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, onCardClick, clothingItems }) { 
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData.temp?.[currentTemperatureUnit] || 0;
  
  return (
   <main className="main">
    <WeatherCard weatherData={weatherData} /> 
    <section className="cards">
      <p className="cards__text">
        Today is {temp} &deg; {currentTemperatureUnit} / You may want to wear:
      </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return weatherData.type && item.weather === weatherData.type.toLowerCase();
            })
            .map((item) => (
              <ItemCard 
                key={item._id} 
                item={item} 
                onCardClick={onCardClick} 
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;