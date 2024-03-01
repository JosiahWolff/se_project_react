import "./Header.css";
import logo from "../../images/logo.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header({ onCreateModal, location, loggedIn, onRegister, onLogin }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__section">
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTWR Logo" />
        </Link>
        <p>
          {currentDate}, {location}
        </p>
      </div>
      <div className="header__section">
        <ToggleSwitch />
        {loggedIn ? (
          <>
            <button
              type="button"
              className="header__button"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
            <Link className="header__user-info" to="/profile">
              <p className="header__user-name">{currentUser?.name}</p>
              <img
                className="header__avatar"
                src={currentUser?.avatar}
                alt="Profile Avatar"
              />
            </Link>
          </>
        ) : (
          <>
            <button
              type="button"
              className="header__button"
              onClick={onRegister}
            >
              Sign Up
            </button>
            <button type="button" className="header__button" onClick={onLogin}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
