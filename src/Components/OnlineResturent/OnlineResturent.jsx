import { Link } from "react-router-dom";
import ResturentCard from "../OnlineResturent/ResturentCard.jsx"
import { IoSearch } from "react-icons/io5";

//import Search from '../Search/Search.jsx';
import './OnlineResturent.css';


const OnlineResturent=({ Allresturent})=>{
//let isOpen=false;

 // console.log("Res",Allresturent);
 // console.log('opne',Allresturent[1].info.isOpen);

  
return(
<>  {/*
<div className="custom-shape-divider-top-1739406982">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>

*/}
<section className="online-resturent" >
    <p className="online-res-title">Restaurants with online food delivery in Mumbai</p>
    <div className="all-filters-container">
    <div className="search-container">
         <input type="text"  className="search-input" name="" placeholder="Search here" />      
         <IoSearch className="search-icon"/>
       </div>
    
    <div className="filter">sorting</div>
    </div>
    
    <div className="online-resturent-list">
    {Allresturent?.map((resinfo,index)=>( 
      resinfo.info.isOpen?(
      <Link to= {`/resturentsmenu/${resinfo.info.id}`} key={resinfo.info.id} className='links' onClick={()=>{ window.scrollTo(0, 0)}}>
      <ResturentCard  resdetail={resinfo} Index={index}/>
    </Link>):<ResturentCard  resdetail={resinfo} Index={index}/>
      ))}
   </div>


    </section>
    </>);
};

export default OnlineResturent;