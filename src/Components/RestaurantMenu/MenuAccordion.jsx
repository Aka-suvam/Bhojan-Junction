import  { useState,useEffect } from 'react';
import { BsStarFill } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu_item } from '../../ulits/Constants';


const MenuAccordion = ({title,resitem }) => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };




  

return (
    <div className="menu-accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className='menu-accordion-title'>{title} {resitem?.length===0 ?null: `(${resitem?.length})`}</h3>
        <span>{isOpen ? <MdKeyboardArrowUp className='accordionup'/> : <MdKeyboardArrowDown className='accordiondown'/>}</span>
      </div>
      {isOpen && (
        <div className='accordion-items'>
          {resitem.map(({card:{info:{name,id,imageId,description,price,defaultPrice,ratings}}})=>( 
            <div className="accordion-content" key={id}>
              <div className='menuitem-flex'>
                <div className='menu-row-one'>
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
                <div className='menu-row-two'>
                  <img src={Menu_item+imageId} alt='dish'/>
                </div>
               
               </div> 
            </div>
          ))} 
        </div>
      )}
    </div>
  );
};

export default MenuAccordion;
