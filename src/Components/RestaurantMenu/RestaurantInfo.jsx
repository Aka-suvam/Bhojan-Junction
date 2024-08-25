
import { BsStarFill } from "react-icons/bs";
import {TOP_CARSOUL,Delivery_icon} from '../../ulits/Constants.js';


const RestaurantInfo = ({resinfo}) => {
    const { name, cuisines, areaName , avgRating, totalRatingsString,cloudinaryImageId,sla } =  resinfo?.[2]?.card?.card?.info || [];

  return (
    <>
      <p className="menu-res-name">{name}</p>
     <div className="menu_img">
        <img src={TOP_CARSOUL+cloudinaryImageId} alt="Restuents-img"/>
     </div>
    <div className="menu-flex">
        <div className="row-one">
        <p className="menu-cusines">{cuisines?.join(', ')}</p>
        <p className="menu-areaname">{areaName}</p>
        </div>
        <div className="row-two">
            <div className="star-rating">
            <BsStarFill className="menu-star-icon"/>
            <p className="menu-rating">{avgRating}</p>
            </div>
            
            <p className="menu-total-rating">{totalRatingsString}</p>
        </div>
    </div>
    <div className="distance">
     <div className="distance-icon">
        <img src={Delivery_icon} alt='delivery-icon'/>
     </div>
     <p className="menu-distance">{sla?.lastMileTravelString}s</p>
    </div>
    </>
  )
}

export default RestaurantInfo;
