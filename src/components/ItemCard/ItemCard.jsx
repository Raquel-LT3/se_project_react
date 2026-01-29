// src/components/ItemCard/ItemCard.jsx

import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

// 1. Added 'item' to the destructured props
function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  // 2. Updated isLiked logic to handle both _id and id
  const isLiked =
    currentUser &&
    item.likes?.some((id) => id === (currentUser._id || currentUser.id));

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleLikeClick = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__content">
        <div className="card__header">
          <h2 className="card__name">{item.name}</h2>
          {currentUser && currentUser._id && (
            <button
              className={itemLikeButtonClassName}
              onClick={handleLikeClick}
              type="button"
            />
          )}
        </div>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="card__image"
          onClick={() => onCardClick(item)}
        />
      </div>
    </li>
  );
}

export default ItemCard;
