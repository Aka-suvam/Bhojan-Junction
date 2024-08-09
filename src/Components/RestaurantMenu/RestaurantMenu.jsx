import { BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import  useRestaurantMenu  from '../../hooks/useRestaurantMenu.js';
import {Delivery_icon} from '../../ulits/Constants.js';
import MenuAccordion from "./MenuAccordion.jsx";
import './RestaurantMenu.css'; 

const RestaurantMenu=()=>{

      const {resId} = useParams();
      const menu = useRestaurantMenu(resId);
     //console.log('menu',menu);
     const { name, cuisines, areaName , avgRating, totalRatingsString,cloudinaryImageId,sla } =  menu?.[2]?.card?.card?.info || [];

     const resmenutitle = menu
     ?.find(group => group?.groupedCard?.cardGroupMap?.REGULAR?.cards
       ?.find(card => card?.card?.card?.title === 'Recommended'))
     ?.groupedCard?.cardGroupMap?.REGULAR?.cards
     ?.find(card => card?.card?.card?.title === 'Recommended').card?.card?.title||[];
     console.log("Restitle-", resmenutitle );



     const recommendedmenu = menu?.find(x => x?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some(y => y?.card?.card?.title === 'Recommended'))?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(y => y?.card?.card?.title === 'Recommended')?.card?.card?.itemCards || [];

      console.log("ResMenu-",recommendedmenu );


    return(
    <section className="res-menu">
    <div className="menu-container">
     <p className="menu-res-name">{name}</p>
     <div className="menu--img">
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/bd2b4e48dafa3f0ac467dea6c9244160' alt=""/>
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
    <MenuAccordion title={resmenutitle} recmenu={recommendedmenu} />
  {/*<MenuAccordion title="Group Sharing Combos (21)
" content="Content for section 2."  IMG={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/22/0fbf18a1-5191-4cda-a09d-521a24c8c6ca_25cf57c6-48cc-47bd-b422-17e86b816422.png`}  ItemName={'chicken'} price={2342} />  */}
<MenuAccordion   />
<MenuAccordion  />
    </div>
  


    </section>);
};

export default RestaurantMenu;