import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from '../../hooks/useRestaurantMenu.js';
import RestaurantInfo from "./RestaurantInfo.jsx";
import MenuAccordion from "./MenuAccordion.jsx";
import Foodimg from "../../assets/images/food-imgge.svg";
import Menuicon from '../../assets/images/menu.png';
import Vegicon from '../../assets/images/veg-icon.svg';
import Nonvegicon from '../../assets/images/nonveg.jpg';
import FoodFilterToggle from '../../Components/RestaurantMenu/FoodFilterToggle.jsx';
import './RestaurantMenu.css';

const RestaurantMenu = () => {
  const [filterState, setFilterState] = useState({
    vegOnly: false,
    nonVegOnly: false
  });

  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  
  const handleFilterToggle = (filterType) => {
    setFilterState(prev => {
      if (filterType === 'veg') {
        return {
          vegOnly: !prev.vegOnly,
          nonVegOnly: false
        };
      } else {
        return {
          vegOnly: false,
          nonVegOnly: !prev.nonVegOnly
        };
      }
    });
  };

  const filterItems = (items) => {
    if (!items) return [];
    
    return items.filter(item => {
      const isVeg = item?.card?.info?.isVeg === 1;
      if (filterState.vegOnly) return isVeg;
      if (filterState.nonVegOnly) return !isVeg;
      return true;
    });
  };

  const categories = menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter((data) => data.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    .map(category => ({
      title: category.card?.card?.title,
      // Apply the filter to each category's items
      items: filterItems(category.card?.card?.itemCards)
    }))
    .filter(category => category.items.length > 0); // Only show categories that have items after filtering

  return (
    <section className="res-menu">
      <div className="menu-container">
        <RestaurantInfo resinfo={menu} />
        
        <div className="menu-title-container">
          <div className="menu-icon">
            <img src={Menuicon} alt='menu-icon'/>
          </div>
          <p className="menu">Menu</p>
        </div>

        <div className="menu-filter-container">
          <FoodFilterToggle
            Img={Vegicon}
            Alt="Vegetarian icon"
            type="veg"
            isActive={filterState.vegOnly}
            onToggle={() => handleFilterToggle('veg')}
          />
          <FoodFilterToggle
            Img={Nonvegicon}
            Alt="Non-vegetarian icon"
            type="nonveg"
            isActive={filterState.nonVegOnly}
            onToggle={() => handleFilterToggle('nonveg')}
          />
        </div>

        <div className='accordion-container'>
          {categories?.map((category, index) => (
            <MenuAccordion 
              key={index}
              title={category.title}
              resitem={category.items}
            />
          ))}
        </div>
      </div>
      
      <div className='back-img'>
        <img src={Foodimg} alt='back' />
      </div>
    </section>
  );
};

export default RestaurantMenu;