
import { BsStarFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {ONLINE_RES} from '../../ulits/Constants.js';
import './OnlineResturent.css';




const OnlineResturent=({ Allresturent})=>{
   //console.log("Res",Allresturent);

   const truncateCuisine = (str) => {
    return str.length >= 33 ? str.slice(0, 33) + "..." : str
  }

  const resname=(namee)=>{
   return namee.length >=33 ? namee.slice(0,33)+'...':namee
  }
return(<section className="online-resturent" >
    <p className="online-res-title">Restaurants with online food delivery in Mumbai</p>
    <div className="filter">filter</div>
    <div className="online-resturent-list">
   
   { Allresturent?.map(({ info: { id, cloudinaryImageId, name,avgRating,sla,areaName,aggregatedDiscountInfoV3,cuisines}}) =>
   
   (   <div className="resturent-card"  key={id}>
         <div className="res-img">
            <img src={ONLINE_RES + cloudinaryImageId} alt='resturent-img'/>
         </div>
         
         <div className="res-detail">
            <p className="res-name">{resname(name)}</p>
            <div className="flex">
            <BsStarFill className="star-icon" />
             <p className="rating">{avgRating}</p>
             <p className="time"> &#8226; ⏰ {sla.slaString}</p>
         </div>

         <div className="online-cuisines">
         <RestaurantIcon  className="online-cuisines-icon"/>
         <p className="res-online-cuisines">{truncateCuisine(cuisines.join(", "))}</p>
         </div>
          <div className="online-location-container">
          <ImLocation2 className="online-location-icon" />
          <p className="online-res-location">{areaName}</p>
         </div>
         <p className="res-online-discount">   {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}  </p>

         </div>
         
    </div>
    )
)}
   </div>


    </section>);
};

export default OnlineResturent;