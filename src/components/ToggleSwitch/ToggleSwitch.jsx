// src/components/ToggleSwitch/ToggleSwitch.jsx 

import React, { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  //   
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggle-switch__slider toggle-switch__slider_F"
            : "toggle-switch__slider toggle-switch__slider_C"
        }
      ></span>
      <p className={`toggle-switch__text_F ${currentTemperatureUnit === "F" && "toggle-switch__text_active"}`}>F</p>
      <p className={`toggle-switch__text_C ${currentTemperatureUnit === "C" && "toggle-switch__text_active"}`}>C</p>
    </label>
  );
};

export default ToggleSwitch;