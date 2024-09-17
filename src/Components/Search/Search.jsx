import { IoSearch } from "react-icons/io5";

import './Search.css';

const Search = () => {
  return (
   <div className="search-container">
         <input type="text"  className="search-input" name="" placeholder="Search here" />      
         <IoSearch className="search-icon"/>
       </div>
  

  )
}

export default Search;
