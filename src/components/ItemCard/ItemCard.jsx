// src/components/ItemCard/ItemCard.jsx

function ItemCard({ item, onCardClick }) { 
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img 
        className="card__image" 
        src={item.link} 
        alt={item.name} 
        onClick={() => onCardClick(item)}
        style={{ cursor: 'pointer' }}    
      />
    </li>
  );
}

export default ItemCard;