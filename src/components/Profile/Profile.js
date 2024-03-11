import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import React from "react";

const Profile = ({
  onCreateModal,
  clothingItems,
  onSelectCard,
  editProfile,
  logout,
  handleCardLike,
  loggedIn,
}) => {
  return (
    <div className="profile">
      <SideBar editProfile={editProfile} logout={logout}></SideBar>

      <div className="profile__items-container">
        <div className="profile__clothing-header">
          <div className="profile__clothing-text">
            Your clothing items
            <button
              className="profile__add-button"
              onClick={onCreateModal}
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
            onCreate={onCreateModal}
            handleCardLike={handleCardLike}
            loggedIn={loggedIn}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
