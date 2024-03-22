import RestaurantCard, { withPromoted } from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurant, setFilteredListOfRestaurants] = useState([]);

  const RestaurantPromotedCard = withPromoted(RestaurantCard);
  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    console.log(response);
    setListOfRestaurants(
      response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredListOfRestaurants(
      response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              setFilteredListOfRestaurants(() => {
                return listOfRestaurants.filter((data) =>
                  data.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
              });
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            if (filteredListOfRestaurant.length === listOfRestaurants.length) {
              setFilteredListOfRestaurants((list) =>
                list.filter((item) => parseFloat(item.info.avgRating) >= 4.4)
              );
            } else {
              setFilteredListOfRestaurants(listOfRestaurants);
            }
          }}
        >
          {filteredListOfRestaurant.length === listOfRestaurants.length
            ? "Top Rated Restaurants"
            : "All Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurant.map((resData) => (
          <Link to={"/restaurants/" + resData.info.id} key={resData.info.id}>
            {resData.info.promoted ? (
              <RestaurantPromotedCard resData={resData.info} />
            ) : (
              <RestaurantCard resData={resData.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
