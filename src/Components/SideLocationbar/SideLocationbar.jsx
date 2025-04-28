import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { RiCrosshair2Line } from "react-icons/ri";
 
/*while making this there is some i find-out- inswiggy after writing 3 letter - a loding show and  a api is call 
api/proxy/swiggy/dapi/misc/place-autocomplete?input=    and then suggestion place ui are show . after selection a place - then also a api is called and - https://www.swiggy.com/dapi/misc/address-recommend?place_id=ChIJs3Y3up_-4jkRoLX11qhmo_Q  then seelcted suggest place or my place i got my foos item*/

import './SideLocationbar.css';

const SideLocationbar = ({handleSidebartoggle}) => {

  const [location, setLocation] = useState('location');
   const [search,setSearch]=useState('');

   const handlesearch= async (e)=>{
    try {
   setSearch(e.target.value);
   if (search.length >= 3) {
    const response = await fetch(`api/proxy/swiggy/dapi/misc/place-autocomplete?input=${search}`);
    if (!response.ok) {
        const err = response.status;
        throw new err();
    } else {
        const json = await response.json();
        setLocation(json?.data);
    }
}
} catch (err) {
console.log(err);
}
   }
   
  const getUserLocation=()=> {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // setLocation([latitude,longitude])
        console.log(`Lat: ${latitude}, Long: ${longitude}`);
        // Use these coordinates as needed
      },
      (error) => {
        console.error("Error getting location:", error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  } else {
    console.error("Geolocation is not supported by this browser");
  }
}
  return (
    <section className='side-location-bar'>
      <div className="location-content">
        <RxCrossCircled className="cancel-icon"  onClick={handleSidebartoggle}/>

    
    <button > Get {location}</button>
    <br/>
    <input type='text' placeholder="Seaarch any city"    value={search}    onChange={(e)=>handlesearch(e)}/>

    <button className="getlocation-btn" onClick={getUserLocation}>
      <span className="location-text-row-one"> 
      <RiCrosshair2Line  className="crosslocation-icon"/>
      Get current location
      </span>
      <span className="location-text-row-two">using GPS</span>
      
      </button>
    </div>
   
    </section>
      
   
  )
}

export default SideLocationbar
