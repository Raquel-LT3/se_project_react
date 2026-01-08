// src/components/Header/Header.jsx
import "./Header.css";
import logo from "../../Assets/Logo.svg";
import avatar from "../../Assets/Terrence Tegegne.svg";

function Header({ onCreateModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />

      <p className="header__date-and-location">{currentDate}, New York</p>

      <button
        onClick={onCreateModal}
        className="header__add-clothes-btn"
        type="button"
      >
        + Add clothes
      </button>

      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}
export default Header;
