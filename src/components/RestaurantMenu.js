import React, { useState } from "react";

import Shimmer from "./Shimmer";
import ItemCategory from "./ItemCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [toggleItemCards, setToggleItemCards] = useState(null);

  const handleToggle = (title) => {
    if (title === toggleItemCards) {
      setToggleItemCards(null);
    } else {
      setToggleItemCards(title);
    }
  };
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    feeDetails,
    sla,
  } = resInfo.cards[0].card.card.info;
  const itemCards =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((card) =>
      card.card.card["@type"].includes("ItemCategory")
    );
  // console.log(itemCards);

  return (
    <div className="menu">
      <div className="menu-info">
        <div className="menu-info-left">
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>{areaName}</p>
          <p className="deliveryTime">
            <span>🚴‍♀️</span>
            {feeDetails.message}
          </p>
        </div>
        <div className="menu-info-right">
          <h2>
            <span>⭐</span>
            {avgRating}
          </h2>
          <p>10k+ ratings</p>
        </div>
      </div>
      <div className="timeCost">
        <h2>
          <span>⌛</span>
          {sla.slaString}
        </h2>
        <h2>
          <span>💸</span>
          {costForTwoMessage}
        </h2>
      </div>
      <div className="itemCategories">
        {itemCards.map((itemCategory) => (
          <ItemCategory
            key={itemCategory.card.card.title}
            itemCategory={itemCategory}
            toggleItemCards={toggleItemCards === itemCategory.card.card.title}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
