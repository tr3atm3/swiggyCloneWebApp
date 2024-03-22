import React from "react";
import ItemCard from "./ItemCard";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
const ItemCategory = ({ itemCategory, toggleItemCards, handleToggle }) => {
  let { title, itemCards = [] } = itemCategory.card.card;

  const handleHeaderClick = () => {
    // setToggleItemCards((prev) => !prev);
    handleToggle(title);
  };
  return (
    <div>
      <div className="itemHeader" onClick={handleHeaderClick}>
        <h2 className="" onClick={handleHeaderClick}>
          {title} ({itemCards.length})
        </h2>
        {toggleItemCards ? <SlArrowUp /> : <SlArrowDown />}
      </div>
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
