import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const { items, totalAmount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleOrderbtn = () => {
    alert("Order placed");
    dispatch(clearCart());
  };
  return (
    <div className="cart">
      <h1 className="cart-header">Cart</h1>
      <div className="cart-subHeader">
        <h2 className="totalAmount">TotalAmount: ₹{totalAmount}</h2>
        <button className="cart-subHeader-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {items.length === 0 ? (
        <h2>Add items to cart from home.</h2>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <CartItems key={item.id} item={item} />
          ))}
        </div>
      )}
      {items.length > 0 && (
        <button className="cart-subHeader-btn" onClick={handleOrderbtn}>
          Order
        </button>
      )}
    </div>
  );
};

export default Cart;
