import { useState,useEffect } from "react";
import { Resturent_API } from "../ulits/Constants";


const useRestaurant=()=>{

  const [mindCarsoul,setMindCarsoul]=useState([]);
  const [topCarsoul,setTopCarsoul]=useState([]);
  const [allresturentlist,setAllResturentlist]=useState([]);

  useEffect(() => { fetchData() }, []);

  const fetchData = async () => {
   
    try {
      const response = await fetch(Resturent_API);

       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      else {

      const json = await response.json();
      //console.log(json);

      const mindslider = json?.data?.cards?.find(x => x?.card?.card?.id === "whats_on_your_mind")?.card?.card ?.imageGridCards?.info;
      const topslider=json?.data?.cards?.find(x => x?.card?.card?.id === "top_brands_for_you")?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const allrestaurant = json?.data?.cards?.find((x) => x?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setMindCarsoul(mindslider);
      setTopCarsoul(topslider);
      setAllResturentlist(allrestaurant);
      }

    }catch (error) {
      console.error("Failed to fetch data:", error); 
    } 
   };

    return [mindCarsoul,topCarsoul,allresturentlist];
};


export default useRestaurant;