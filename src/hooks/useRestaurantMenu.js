import { useState,useEffect } from "react";
import {MENU_API} from '../ulits/Constants.js';


  const useRestaurantMenu=(resId)=>{

    const [menu,setMenu]=useState([]);
   
    useEffect(() => { fetchMenu() },[resId]);



      const fetchMenu = async () => {
      try {
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);

      if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
      }

      else  {
           const json = await response.json();
          setMenu(json.data.cards);
          
        }

  }catch (error) {
    console.error("Failed to fetch data:", error); 
    setMenu([]);
  } 
 };


 return (menu)
};


export default useRestaurantMenu;