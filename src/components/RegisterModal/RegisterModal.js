import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({ onClose, registerUser, openLoginModal }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    registerUser({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      name="register"
      title="Sign Up"
      onClose={onClose}
      buttonText="Sign Up"
      onRegister={onRegister}
    >
      <div>
        <label htmlFor="email-input" className="modal__input-title">
          Email*
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
          Password*
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

      <div>
        <label htmlFor="name-input" className="modal__input-title">
          Name*
        </label>
        <input
          id="name-input"
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="45"
          required
          value={name}
          onChange={handleNameChange}
        ></input>
      </div>

      <div>
        <label htmlFor="avatar-input" className="modal__input-title">
          Avatar URL *
        </label>
        <input
          id="avatar-input"
          className="modal__input"
          type="url"
          name="url"
          placeholder="Avatar URL"
          required
          value={avatar}
          onChange={handleAvatarChange}
        ></input>
      </div>

      <button className="modal__login" type="button" onClick={openLoginModal}>
        or Log in
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
