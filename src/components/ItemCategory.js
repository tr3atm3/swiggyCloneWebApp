import React, { useState } from "react";
import ItemCard from "./ItemCard";
const ItemCategory = ({ itemCategory }) => {
  const [toggleItemCards, setToggleItemCards] = useState(false);
  let { title, itemCards = [] } = itemCategory.card.card;
  const handleHeaderClick = () => {
    setToggleItemCards((prev) => !prev);
  };
  return (
    <div>
      <h2 className="itemHeader" onClick={handleHeaderClick}>
        {title} ({itemCards.length})
      </h2>
      {toggleItemCards && (
        <div>
          {itemCards.length > 0 &&
            itemCards.map((item) => (
              <ItemCard key={item.card.info.id} item={item} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ItemCategory;
