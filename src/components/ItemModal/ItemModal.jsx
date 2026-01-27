// src/components/ItemModal/ItemModal.jsx


import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

function ItemModal({ isOpen, card, onClose, onDelete }) {
  const currentUser = useContext(CurrentUserContext);

  // Check if current user is owner
  const isOwn = card.owner === currentUser?._id;

  // Apply the visibility class based on ownership
  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "modal__delete-button_visible" : "modal__delete-button_hidden"
  }`;

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" onClick={onClose} type="button" />
        <img className="modal__image" src={card.imageUrl} alt={card.name} />
        <div className="modal__footer">
          <div className="modal__text-container">
            <p className="modal__item-name">{card.name}</p>
            <p className="modal__item-weather">Weather: {card.weather}</p>
          </div>
          
          {/* Only render if it's the user's item */}
          {isOwn && (
            <button
              className={itemDeleteButtonClassName}
              type="button"
              onClick={() => onDelete(card)}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;