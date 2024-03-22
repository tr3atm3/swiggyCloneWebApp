import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items).reduce(
    (acc, cur) => cur.quantity + acc,
    0
  );

  console.log(cartItems);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo of the app" />
        <h1>SwiggyClone</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">🛒Cart({cartItems})</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setIsLoggedIn((prev) => !prev);
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          {isLoggedIn && <li className="user-name">{loggedInUser}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
