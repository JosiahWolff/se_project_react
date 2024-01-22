import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ onCreateModal, location }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
        <button
          type="button"
          className="header__button"
          onClick={onCreateModal}
        >
          + Add clothes
        </button>
        <Link className="header__user-info" to="/profile">
          <p className="header__user-name">Terrence Tegegne</p>
          <img className="header__avatar" src={avatar} alt="Profile Avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
