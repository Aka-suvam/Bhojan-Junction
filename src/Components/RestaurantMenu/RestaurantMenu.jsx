import { useParams } from "react-router-dom";
import useRestaurantMenu from '../../hooks/useRestaurantMenu.js';
import RestaurantInfo from "./RestaurantInfo.jsx";
import MenuAccordion from "./MenuAccordion.jsx";
import './RestaurantMenu.css'; 

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  //console.log('menu',menu);

  const getFoodCategoryRecommand = (menu, title) => {
    return menu
      ?.find(group => 
        group?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.some(card => card?.card?.card?.title === title))
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.find(card => card?.card?.card?.title === title)
      ?.card?.card;
  };

  const recommendedSection = getFoodCategoryRecommand(menu, 'Recommended');
  const recommendedtitle = recommendedSection?.title || '';
  const recommendedItems = recommendedSection?.itemCards || [];

  const getRandomMenuItem = (menu, previousItem = null) => {
    const allFoodItems = menu
      ?.flatMap(group => group?.groupedCard?.cardGroupMap?.REGULAR?.cards || [])
      ?.map(card => card?.card?.card)
      ?.filter(items => items?.title !== 'Recommended' && items?.itemCards?.length > 0);
  
    // Return null if there are no valid items
    if (!allFoodItems || allFoodItems.length === 0) return null;
  
    let randomFoodItem = null;
  
    // Continuously pick a random valid item until a different valid one is found
    while (!randomFoodItem || randomFoodItem === previousItem) {
      const randomIndex = Math.floor(Math.random() * allFoodItems.length);
      randomFoodItem = allFoodItems[randomIndex];
    }
  
    return randomFoodItem;
  };
  
  // Example usage
  const randomFoodItem1 = getRandomMenuItem(menu);
  const randomFoodItem2 = getRandomMenuItem(menu, randomFoodItem1);
  
  //console.log('Random Food Item 1:', randomFoodItem1?.itemCards);
  //console.log('Random Food Item 2:', randomFoodItem2?.itemCards);
  
  
  
  return (
    <section className="res-menu">
      <div className="menu-container">
        <RestaurantInfo resinfo={menu} />
        {recommendedItems.length > 0 && (
          <MenuAccordion title={recommendedtitle} resitem={recommendedItems} />
        )}
     {   randomFoodItem1?.itemCards.length>0 ?
     <>
<MenuAccordion title={randomFoodItem1?.title} resitem={randomFoodItem1?.itemCards } />
<MenuAccordion title={randomFoodItem2?.title} resitem={randomFoodItem2?.itemCards} />
</>:null
     }

        
      </div>
    </section>
  );
};

export default RestaurantMenu;
