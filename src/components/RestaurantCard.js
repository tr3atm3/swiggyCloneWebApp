import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData;
  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="table full of dished"
      />
      <h3 className="res-name">{name}</h3>
      <div className="rating-ETA">
        <h3>⭐{avgRating}</h3>
        <h3 className="eta">{sla.slaString} mins</h3>
      </div>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
