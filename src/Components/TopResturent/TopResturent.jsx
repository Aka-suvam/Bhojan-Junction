import {useRef} from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort,BsArrowLeftShort,BsStarFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import {TOP_CARSOUL} from  '../../ulits/Constants.js';
import './TopResturent.css';



const TopResturent=({Topresturent})=>{

  const sliderRef=useRef(null);

  const Carsoulright=()=>{
    sliderRef.current.scrollLeft+=335;
  } 

  const Carsoulleft=()=>{
  
  sliderRef.current.scrollLeft-=335;
 }

const truncateCuisine = (str) => {
  return str.length >= 33 ? str.slice(0, 33) + "..." : str
}

    return(<section className="top-resturent">
       <div className="title-btns-container">
        <p className="top-title">Top restaurant chains in Kolkata</p>
        <div className="top-carsoul-btn">
          <BsArrowLeftShort className='left-btn'  onClick={Carsoulleft}/>
          <BsArrowRightShort className="right-btn"  onClick={Carsoulright} />
         </div>

    </div>

   <div className="top-resturent-list" id='res-carsoul' ref={sliderRef}>
     {Topresturent?.map(({ info: { id, cloudinaryImageId, name,avgRating,sla,areaName,aggregatedDiscountInfoV3,cuisines} })=>
  
    
   (  <Link to= {`/resturentsmenu/${id}`} key={id} className='links'>   <div className='top-resturent-card-container' >
        <div className="top-resturent-card"   >
            <div className="top-res-img">
            <img src={TOP_CARSOUL+cloudinaryImageId}
            alt='top-resturent-img'/>
          </div>

         <div className="top-res-detail">
         
            <p className="top-res-name">{name}</p>
           <div className="top-flex">
             <BsStarFill className="top-star-icon" />
             <p className="top-rating">{avgRating}</p>
             <p className="top-time"> &#8226;⏰ {sla.slaString}</p>
          </div>
          <div className="top-cuisines-container">
            < LocalDiningIcon className="top-cuisines-icon"/>
             <p className="top-cuisines">{truncateCuisine(cuisines.join(", "))}</p>
          </div>
             <div className="top-location-container">
             <ImLocation2  className="top-location-icon"/>
             <p className="top-location">{areaName}</p>
             </div>
         </div>
       </div> 

      <p className="top-discount">   {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}  </p>
</div>
</Link>  
    )
)}
   </div>
  
    </section>);
};

export default TopResturent;