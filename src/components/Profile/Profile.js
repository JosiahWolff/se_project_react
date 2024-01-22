import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import React from "react";

const Profile = ({ onCreate, clothingItems, onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar />

      <div className="profile__items-container">
        <div className="profile__clothing-header">
          <div className="profile__clothing-text">
            Your clothing items
            <button
              className="profile__add-button"
              onClick={onCreate}
              type="button"
            >
              {" "}
              + Add New
            </button>
          </div>
        </div>
        <div className="profile__items">
          <ClothesSection
            clothingItems={clothingItems}
            onSelectCard={onSelectCard}
            onCreate={onCreate}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
