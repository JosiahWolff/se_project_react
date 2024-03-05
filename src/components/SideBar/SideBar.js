import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import React, { useContext } from "react";

const SideBar = ({ editProfile, logout }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile__info">
      <div className="profile__info-container">
        <img
          className="profile__avatar"
          src={currentUser?.avatar}
          alt="profile avatar"
        ></img>
        <p className="profile__user-name">{currentUser?.name}</p>
      </div>
      <div className="profile__options">
        <button className="profile__button" onClick={editProfile}>
          Change Profile Data
        </button>
        <button className="profile__button" onClick={logout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
