//src/components/Header/Header.jsx


import "./Header.css";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ onCreateModal, city, isLoggedIn, onRegisterClick, onLoginClick }) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {city} 
      </p>

      <div className="header__user-container">
        <ToggleSwitch />
        
        {isLoggedIn ? (
          <>
            <button type="button" className="header__add-clothes-btn" onClick={onCreateModal}>
              + Add clothes
            </button>
            <NavLink to="/profile" className="header__link">
              {/* Added fallback name to ensure the link is clickable */}
              <p className="header__username">{currentUser?.name || "User"}</p>
              <img 
                src={currentUser?.avatar} 
                alt={currentUser?.name || "avatar"} 
                className="header__avatar" 
              />
            </NavLink>
          </>
        ) : (
          <div className="header__auth">
            <button 
              type="button" 
              className="header__auth-btn" 
              onClick={onRegisterClick}
            >
              Sign Up
            </button>
            <button 
              type="button" 
              className="header__auth-btn" 
              onClick={onLoginClick}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;