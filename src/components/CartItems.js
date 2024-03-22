import React from "react";

import { useDispatch } from "react-redux";
import { addItem, removeItem, closeItem } from "../utils/cartSlice";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const { name, description, price, quantity, imageId, id } = item;

  const handleAddBtn = () => {
    let itemInfo = {
      ...item,
    };
    dispatch(addItem(itemInfo));
  };

  const handleRemoveBtn = () => {
    dispatch(removeItem(id));
  };
  const handleCloseBtn = () => {
    dispatch(closeItem(id));
  };

  return (
    <div className="cart-item">
      <button className="closeBtn" onClick={handleCloseBtn}>
        ❌
      </button>
      <div className="item-info">
        <h2>{name}</h2>
        <p>{description}</p>

        <h2>
          ₹{Math.round((price * quantity) / 100)} for {quantity} quantity
        </h2>
        <button className="addBtn" onClick={handleAddBtn}>
          +
        </button>
        <button className="removeBtn" onClick={handleRemoveBtn}>
          -
        </button>
      </div>
      <div className="item-img">
        <img
          alt={name}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            imageId
          }
        />
      </div>
    </div>
  );
};

export default CartItems;
