import RestaurantCard from "./RestaurantCard";
import { res } from "../utils/DUMMY_DATA";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    res.card.card.gridElements.infoWithStyle.restaurants
  );

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants((list) =>
              list.filter((item) => parseFloat(item.info.avgRating) > 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
