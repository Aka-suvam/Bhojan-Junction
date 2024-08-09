import React, { useState } from 'react';

const MenuAccordion = ({ title, recmenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Safely handle recmenu and destructure only if it is defined
  const recmenuItems = recmenu || []; // Default to empty array if recmenu is undefined

  return (
    <div className="menu-accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className='accordion-items'>
          {/*recmenuItems.map(({ card: { info: { id, name, imageId, price } } }) => (
            <div className="accordion-content" key={id}>
              <p>{name}</p>
              <p>{price}</p>
              <img 
                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/22/0fbf18a1-5191-4cda-a09d-521a24c8c6ca_25cf57c6-48cc-47bd-b422-17e86b816422.png'
                alt='Image'/>
            </div>
          ))*/}
        </div>
      )}
    </div>
  );
};

export default MenuAccordion;
