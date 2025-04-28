import  { useState,useEffect } from 'react';
import { BsStarFill } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu_item } from '../../ulits/Constants';
import Vegicon from '../../assets/images/veg-icon.svg';
import Nonvegicon from '../../assets/images/nonveg-icon.svg';
import Bestsellericon  from '../../assets/images/bestseller.svg'; 

const MenuAccordion = ({title,resitem }) => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

//console.log('res',resitem);


  

return (
    <div className="menu-accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className='menu-accordion-title'>{title} {resitem?.length===0 ?null: `(${resitem?.length})`}</h3>
        <span>{isOpen ? <MdKeyboardArrowUp className='accordionup'/> : <MdKeyboardArrowDown className='accordiondown'/>}</span>
      </div>
      {isOpen && (
        <div className='accordion-items'>
          {resitem.map(({card:{info:{name,id,imageId,isBestseller,isVeg,description,price,defaultPrice,ratings}}})=>(  

            <div className="accordion-content" key={id}>
              <div className='menuitem-flex'>
                <div className='menu-row-one'>
                 <div className='icons-container'> 
               { isVeg?  <img src={Vegicon} alt='veg-icon' className='veg-icon'/>:<img src={ Nonvegicon} alt='nonveg-icon' className='nonveg-icon'/> }
               {isBestseller?<img src={Bestsellericon} alt='best-seller-icon' className='best-seller'/> :null}
               </div>
                <p className='menu-item-name'>{name}</p>
                <p className='menu-item-price'>  ₹ {(price ?? defaultPrice) / 100} </p>
                <div className='accordion-rating'>
                <BsStarFill className="accordion-star-icon"/>
                <p className='menu-item-rating'>
                  
                {(ratings?.aggregatedRating?.rating ?? '2.0')} ({ratings?.aggregatedRating?.ratingCountV2 ?? 5})

                </p>
                </div>
                <p className='menu-item-desc'>{description}</p>
                
                </div>
                {imageId?
                <div className='menu-row-two'>
                  <img src={Menu_item+imageId} alt={name}/>
                </div> :null}
                                 
               </div> 
            </div>
          ))} 
        </div>
      )}
    </div>
  );
};

export default MenuAccordion;
