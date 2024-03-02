import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({ onClose, loginUser, openRegisterModal }) => {
  const [email, changeEmail] = useState("");
  const handleEmailChange = (e) => {
    changeEmail(e.target.value);
  };

  const [password, changePassword] = useState("");
  const handlePasswordChange = (e) => {
    changePassword(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <ModalWithForm
      name="login"
      title="Log In"
      onClose={onClose}
      buttonText="Log In"
      onLogin={onLogin}
    >
      <div>
        <label htmlFor="email-input" className="modal__input-title">
          Email
        </label>
        <input
          id="email-input"
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          minLength="1"
          maxLength="45"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>
      </div>

      <div>
        <label htmlFor="password-input" className="modal__input-title">
          Password
        </label>
        <input
          id="password-input"
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          minLength="1"
          maxLength="45"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </div>

      <button
        className="modal__login"
        type="button"
        onClick={openRegisterModal}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
