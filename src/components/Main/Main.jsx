// src/components/Main/Main.jsx
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "../ItemCard/Itemcard.css";
import "./Main.css";
import { defaultClothingItems } from "../../utils/clothingItems";

function Main({ weatherData, onCardClick }) { 
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} /> 
      
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              // Ensure item.weather matches exactly: "hot", "warm", or "cold"
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard 
                  key={item._id} 
                  item={item} 
                  onCardClick={onCardClick} 
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;