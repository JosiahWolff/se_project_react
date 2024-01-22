import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

import React from "react";

function ClothesSection({ clothingItems, onSelectCard, handleOpenItemModal }) {
  return (
    <section className="clothes__section">
      <ul className="itemCard">
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onSelectCard={onSelectCard}
            handleOpenItemModal={handleOpenItemModal}
          />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
