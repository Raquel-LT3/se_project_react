// src/components/SideBar/SideBar.jsx

import "./SideBar.css";
import avatar from "../../images/Terrence Tegegne.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img className="sidebar__avatar" src={avatar} alt="User avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;
