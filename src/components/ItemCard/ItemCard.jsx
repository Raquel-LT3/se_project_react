// src/components/ItemCard/ItemCard.jsx
import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const imageSrc = item.imageUrl;

  return (
    <li className="card">
      <div className="card__content">
        <h2 className="card__name">{item.name}</h2>
        <img
          src={imageSrc} 
          alt={item.name}
          className="card__image"
          onClick={() => onCardClick(item)}
        />
      </div>
    </li>
  );
}

export default ItemCard;