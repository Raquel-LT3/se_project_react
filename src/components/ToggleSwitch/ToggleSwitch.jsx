// src/components/ToggleSwitch/ToggleSwitch.jsx

import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext,
  );

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        onChange={handleToggleSwitchChange}
      />

      <span
        className={`toggle-switch__circle ${
          currentTemperatureUnit === "C"
            ? "toggle-switch__circle_type_c"
            : "toggle-switch__circle_type_f"
        }`}
      ></span>
      <span
        className={`toggle-switch__text toggle-switch__text_f ${
          currentTemperatureUnit === "F"
            ? "toggle-switch__text_active"
            : "toggle-switch__text_inactive"
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_c ${
          currentTemperatureUnit === "C"
            ? "toggle-switch__text_active"
            : "toggle-switch__text_inactive"
        }`}
      >
        C
      </span>
    </label>
  );
};

export default ToggleSwitch;
