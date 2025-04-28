
import { BsStarFill } from "react-icons/bs";
import {TOP_CARSOUL,Delivery_icon} from '../../ulits/Constants.js';


const RestaurantInfo = ({resinfo}) => {
    const { name, cuisines, areaName , avgRating, totalRatingsString,cloudinaryImageId,sla } =  resinfo?.[2]?.card?.card?.info || [];

  return (
    < div className="menu-details">
      
     <div className="menu_img">
        <img src={TOP_CARSOUL+cloudinaryImageId} alt="Restuents-img"/>
     </div>
     <div className="col1">
     <p className="menu-res-name">{name}</p>
     <p className="menu-cusines">{cuisines?.join(', ')}</p>
     <p className="menu-areaname">{areaName}</p>
     <div className="star-rating">
            <BsStarFill className="menu-star-icon"/>
            <p className="menu-rating">{avgRating} <span className="menu-total-rating">({totalRatingsString})</span></p>
            </div>
            
            <div className="distance">
     <div className="distance-icon">
        <img src={Delivery_icon} alt='delivery-icon'/>
     </div>
     <p className="menu-distance">{sla?.lastMileTravelString}s</p>
    </div>
      </div>
   
    
    </div>
  )
}

export default RestaurantInfo;
