import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`
    );

    const response = await data.json();

    setResInfo(response.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return resInfo;
};

export default useRestaurantMenu;
