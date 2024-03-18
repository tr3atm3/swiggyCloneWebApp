import React from "react";
import { ITEM_IMG } from "../utils/constants";
const ItemCard = ({ item }) => {
  console.log(item);
  let { name, imageId, description, defaultPrice, price, isVeg } =
    item.card.info;
  // const currentItem = item.filter();
  if (!defaultPrice) {
    defaultPrice = price;
  }
  return (
    <div className="itemCard">
      <div className="itemInfo">
        <p>{Boolean(isVeg) ? "🟢" : "🔴"}</p>
        <h3>{name}</h3>
        <h3>💸{defaultPrice / 100}</h3>
        <p>{description}</p>
      </div>
      <div className="itemImg">
        <img src={ITEM_IMG + imageId} />
      </div>
    </div>
  );
};

export default ItemCard;
