// src/components/App/App.jsx

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

// Utilities and Context
import { getForecastWeather, filterWeatherData } from "../../utils/weatherApi";
import { defaultClothingItems } from "../../utils/clothingItems";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  // --- State ---
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 0, C: 0 },
    city: "",
    isDay: true,
    condition: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  // --- Handlers ---
  const handleCardClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // --- Effects ---
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const processedData = filterWeatherData(data);
        setWeatherData(processedData);
      })
      .catch((err) => {
        console.error("Weather fetch failed:", err);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header onCreateModal={handleAddClick} city={weatherData.city} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>

          <Footer />
        </div>

        <ModalWithForm
          buttonText="Add garment"
          title="New garment"
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
        >
          <label className="modal__label">
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="modal__input"
              required
            />
          </label>
          <label className="modal__label">
            Image
            <input
              type="url"
              name="link"
              placeholder="Image URL"
              className="modal__input"
              required
            />
          </label>
          <p className="modal__radio-title">Select the weather type:</p>
          <div className="modal__radio-buttons">
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather"
                value="hot"
                className="modal__radio-input"
              />{" "}
              Hot
            </label>
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather"
                value="warm"
                className="modal__radio-input"
              />{" "}
              Warm
            </label>
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather"
                value="cold"
                className="modal__radio-input"
              />{" "}
              Cold
            </label>
          </div>
        </ModalWithForm>

        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
