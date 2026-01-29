// src/components/SideBar/SideBar.jsx

import React, { useContext } from "react";
import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onLogOut, onEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar}
          alt={currentUser?.name}
        />
        <p className="sidebar__name">{currentUser?.name}</p>
      </div>
      <div className="sidebar__controls">
        <button
          className="sidebar__edit-btn"
          type="button"
          onClick={onEditProfileClick}
        >
          Change profile data
        </button>
        <button
          className="sidebar__logout-btn"
          type="button"
          onClick={onLogOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
