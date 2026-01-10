// src/components/ItemCard/ItemCard.jsx
import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
// Determine the image source, accommodating different property names
  const imageSrc = item.imageUrl || item.link;

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