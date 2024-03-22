import React from "react";
import { ITEM_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);
  let { name, imageId, description, defaultPrice, price, isVeg, id } =
    item.card.info;
  // const currentItem = item.filter();
  if (!defaultPrice) {
    defaultPrice = price;
  }

  const handleAddClick = () => {
    const itemInfo = {
      name: name,
      description: description,
      price: defaultPrice,
      imageId: imageId,
      id: id,
    };
    dispatch(addItem(itemInfo));
  };
  return (
    <div className="itemCard">
      <div className="itemInfo">
        <p>{Boolean(isVeg) ? "🟢" : "🔴"}</p>
        <h3>{name}</h3>
        <h3>₹{defaultPrice / 100}</h3>
        <p>{description}</p>
      </div>
      <div className="itemImg">
        <button onClick={handleAddClick}>Add</button>
        <img src={ITEM_IMG + imageId} />
      </div>
    </div>
  );
};

export default ItemCard;
