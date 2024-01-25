import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React from "react";
import { useForm } from "../../Hooks/useForm";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal, isLoading }) => {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      title="New garment"
      buttontext={isLoading ? "Saving..." : "Add garment"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          value={values.name}
          className="modal__input"
          placeholder="Name"
          minLength={1}
          maxLength={30}
          required
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          value={values.imageUrl}
          className="modal__input"
          placeholder="Image URL"
          minLength={1}
          required
          onChange={handleChange}
        />
      </label>
      <p className="weather__group">Select the weather type</p>
      <ul className="weather__list">
        <li className="weather__type">
          <input
            type="radio"
            id="hot"
            value="hot"
            name="weather"
            className="radio__dot"
            onChange={handleChange}
          />
          <label className="weather__name" htmlFor="hot">
            Hot
          </label>
        </li>
        <li className="weather__type">
          <input
            type="radio"
            id="warm"
            value="warm"
            name="weather"
            className="radio__dot"
            onChange={handleChange}
          />
          <label className="weather__name" htmlFor="warm">
            Warm
          </label>
        </li>
        <li className="weather__type">
          <input
            type="radio"
            id="cold"
            value="cold"
            name="weather"
            className="radio__dot"
            onChange={handleChange}
          />
          <label className="weather__name" htmlFor="cold">
            Cold
          </label>
        </li>
      </ul>
    </ModalWithForm>
  );
};

export default AddItemModal;
