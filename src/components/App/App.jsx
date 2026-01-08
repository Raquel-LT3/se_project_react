import { useEffect, useState } from "react";
import { getForecastWeather, filterWeatherData } from "../../utils/weatherApi";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: 0,
    city: "",
    isDay: true,
    condition: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

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
    <div className="page">
      <div className="page__content">
        {/* Pass city to Header as a prop */}
        <Header onCreateModal={handleAddClick} city={weatherData.city} />

        {/* Pass clothingItems to Main as a prop */}
        <Main 
          weatherData={weatherData} 
          onCardClick={handleCardClick} 
          clothingItems={clothingItems} 
        />

        <ModalWithForm
          buttonText="Add garment"
          title="New garment"
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
        >
          <label htmlFor="name" className="modal__label">
            Name
            <input type="text" className="modal__input" id="name" placeholder="Name" />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image
            <input type="url" className="modal__input" id="imageUrl" placeholder="Image URL" />
          </label>

          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__radio-label">
              <input id="hot" type="radio" name="weather" className="modal__radio-input" value="hot" />
              <span>Hot</span>
            </label>
            <label htmlFor="warm" className="modal__radio-label">
              <input id="warm" type="radio" name="weather" className="modal__radio-input" value="warm" />
              <span>Warm</span>
            </label>
            <label htmlFor="cold" className="modal__radio-label">
              <input id="cold" type="radio" name="weather" className="modal__radio-input" value="cold" />
              <span>Cold</span>
            </label>
          </fieldset>
        </ModalWithForm>

        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          onClose={closeActiveModal}
        />

        <Footer />
      </div>
    </div>
  );
} // Closing the App function properly

export default App;