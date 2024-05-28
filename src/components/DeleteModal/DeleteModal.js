import "./DeleteModal.css";
import React from "react";
import close from "../../images/close.svg";

const DeleteItemModal = ({ onClose, deleteCard }) => {
  return (
    <div className={"modal delete"}>
      <div className="delete__modal-container">
        <button className="delete__modal-close">
          <img
            className="delete-button"
            src={close}
            onClick={onClose}
            alt="Close Button"
          />
        </button>
        <div className="delete__modal-content">
          <p className="delete__modal-text">
            Are you sure you want to delete this item?
            <br></br>
            This action is irreversible!
          </p>
        </div>

        <div className="delete__modal-button">
          <button className="delete__button-confirm" onClick={deleteCard}>
            Yes, delete item
          </button>
        </div>
        <div className="delete__modal-button">
          <button className="delete__button-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
