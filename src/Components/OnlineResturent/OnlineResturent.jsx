import { Link } from "react-router-dom";
import ResturentCard from "../OnlineResturent/ResturentCard.jsx"
import { IoSearch } from "react-icons/io5";

//import Search from '../Search/Search.jsx';
import './OnlineResturent.css';


const OnlineResturent=({ Allresturent})=>{
  // console.log("Res",Allresturent);

  
return(<section className="online-resturent" >
    <p className="online-res-title">Restaurants with online food delivery in Mumbai</p>
    <div className="all-filters-container">
    <div className="search-container">
         <input type="text"  className="search-input" name="" placeholder="Search here" />      
         <IoSearch className="search-icon"/>
       </div>
    
    <div className="filter">sorting</div>
    </div>
    
    <div className="online-resturent-list">
    {Allresturent?.map((resinfo)=>( 
      <Link to= {`/resturentsmenu/${resinfo.info.id}`} key={resinfo.info.id} className='links'>
      <ResturentCard  resdetail={resinfo}/>
    </Link>))
   
    
}
   </div>


    </section>);
};

export default OnlineResturent;