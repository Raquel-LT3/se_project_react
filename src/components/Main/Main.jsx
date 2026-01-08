// src/components/Main/Main.jsx

import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "../ItemCard/ItemCard.css";
import "./Main.css";


// Change defaultClothingItems to clothingItems in the props
function Main({ weatherData, onCardClick, clothingItems }) { 
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} /> 
      
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {/* Change defaultClothingItems to clothingItems */}
          {clothingItems
            .filter((item) => {
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