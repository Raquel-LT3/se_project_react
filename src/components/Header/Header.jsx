// src/components/Header/Header.jsx
import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/Terrence Tegegne.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ onCreateModal, city }) {
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
        <button
          type="button"
          className="header__add-clothes-btn"
          onClick={onCreateModal}
        >
          + Add clothes
        </button>
        <Link to="/profile" className="header__link">
          <p className="header__username">Terrence Tegegne</p>
        </Link>
        <img src={avatar} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;