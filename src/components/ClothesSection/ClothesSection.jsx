// src/components/ClothesSection/ClothesSection.jsx

import "./ClothesSection.css"; 
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems, handleAddClick, onCardLike }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>

        <button
          className="clothes-section__add-btn"
          type="button"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => (
          <ItemCard 
            key={item._id} 
            item={item} 
            onCardClick={onCardClick} 
            onCardLike={onCardLike} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;