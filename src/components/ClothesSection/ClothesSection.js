import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext } from "react";

function ClothesSection({
  clothingItems,
  onSelectCard,
  handleOpenItemModal,
  loggedIn,
  handleCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="clothes__section">
      <ul className="itemCard">
        {clothingItems.map((item) => {
          const isOwn = item.owner === currentUser._id;
          if (isOwn) {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
                handleOpenItemModal={handleOpenItemModal}
                handleCardLike={handleCardLike}
                loggedIn={loggedIn}
              />
            );
          } else return null;
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
