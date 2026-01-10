// src/components/ItemModal/ItemModal.jsx
import "./ItemModal.css";

function ItemModal({ isOpen, card, onClose, onDelete }) {
  // 1. Keep the image logic that works
  const imageSrc = card.imageUrl || card.link;

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" onClick={onClose} type="button" />
        
        {/* Use the working imageSrc here */}
        <img className="modal__image" src={imageSrc} alt={card.name} />
        
        <div className="modal__footer">
          <div className="modal__text-container">
            {/* 2. Use the class names from your original 'correct' CSS */}
            <p className="modal__item-name">{card.name}</p>
            <p className="modal__item-weather">Weather: {card.weather}</p>
          </div>
          <button
            className="modal__delete-button" /* Match your CSS name */
            type="button"
            onClick={() => onDelete(card)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;