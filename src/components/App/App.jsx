//src/components/App/App.jsx

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import * as auth from "../../utils/auth";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import { getForecastWeather, filterWeatherData } from "../../utils/weatherApi";
import { useNavigate } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 0, C: 0 },
    city: "",
    isDay: true,
    condition: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
    _id: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const navigate = useNavigate();

  const handleCardClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  };

  const handleAddClick = () => setActiveModal("add-garment");
  const closeActiveModal = () => setActiveModal("");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleDeleteClick = () => {
    setActiveModal("delete-confirmation");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({ name: "", avatar: "", _id: "" });
    navigate("/");
  };

  const handleAddItemSubmit = (inputValues) => {
    const token = localStorage.getItem("jwt");
    addItem(inputValues, token)
      .then((res) => {
        const itemToAdd = res.data || res;
        setClothingItems([itemToAdd, ...clothingItems]);
        closeActiveModal();
      })
      .catch((err) => console.error("API Error:", err));
  };

  const handleConfirmDelete = () => {
    const token = localStorage.getItem("jwt");
    deleteItem(selectedCard._id, token)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id),
        );
        closeActiveModal();
      })
      .catch((err) => console.error("API Error:", err));
  };

  const handleRegistration = ({ name, avatar, email, password }) => {
    auth
      .register(name, avatar, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) return;

    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return auth.checkToken(data.token); 
        }
      })
      .then((res) => {
        setCurrentUser(res.data || res); 
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch((err) => console.error(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch((err) => console.error(err));
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const decodedData = filterWeatherData(data);
        setWeatherData(decodedData);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  useEffect(() => {
    getItems()
      .then((res) => {
        setClothingItems(res.data.reverse());
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.data || res);
        })
        .catch((err) => {
          console.error("Token validation failed:", err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  // Render the App component
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              onCreateModal={handleAddClick}
              city={weatherData.city}
              isLoggedIn={isLoggedIn}
              onRegisterClick={handleRegisterClick}
              onLoginClick={handleLoginClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      onCardLike={handleCardLike}
                      onLogOut={handleLogOut} 
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          {/* Modals Section */}
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItem={handleAddItemSubmit}
          />
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
            onDelete={handleDeleteClick}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={closeActiveModal}
            handleRegistration={handleRegistration}
            openLoginModal={handleLoginClick}
          />
          <ConfirmModal
            isOpen={activeModal === "delete-confirmation"}
            onClose={closeActiveModal}
            onDelete={handleConfirmDelete}
            openRegisterModal={handleRegisterClick}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            handleLogin={handleLogin}
            openRegisterModal={handleRegisterClick}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
