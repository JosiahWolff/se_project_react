import "./SideBar.css";
import avatar from "../../images/avatar.png";
import React from "react";

const SideBar = () => {
  return (
    <div className="profile__info">
      <div className="profile__info-container">
        <img className="profile__avatar" src={avatar} alt="profile avatar" />
        <p className="profile__user-name">Terrence Tegegne</p>
      </div>
    </div>
  );
};

export default SideBar;
