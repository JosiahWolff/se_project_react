import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, handleCardLike, loggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const id = item._id;
  const isLiked = item.likes.includes(currentUser._id);
  const likeButtonClass = `itemcard__likebutton ${
    isLiked ? "itemcard__likebutton_liked" : ""
  }`;
  const handleLikeClick = () => {
    handleCardLike(id);
  };

  return (
    <div className="itemcard__container">
      <div className="itemcard__info">
        <div className="itemcard__name-container">
          <div className="card_name">{item.name}</div>
        </div>
        {loggedIn && (
          <button
            className={likeButtonClass}
            type="button"
            onClick={handleLikeClick}
          ></button>
        )}
      </div>
      <img
        src={item.imageUrl}
        className="card_image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
    </div>
  );
};

export default ItemCard;
