import { useRef } from "react";
import { BsArrowRightShort,BsArrowLeftShort } from "react-icons/bs";
import {MIND_CARSOUL} from '../../ulits/Constants.js';
import './WhatsOnMinds.css';


const WhatsOnMind=({fooditems})=>{
    //console.log('Mind',typeof fooditems)

   const MindsliderRef=useRef(null);

   // const slider=document.getElementById('slider');

     const slideRight=()=>{ 
        MindsliderRef.current.scrollLeft+=170;
}

    const slideLeft=()=>{
        MindsliderRef.current.scrollLeft-=170;
}



return( <section className="whats-on-mind-section">
<div className="whats-on-mind">
<h1 className="mind-title">What's on your mind?</h1>

<div className='carsoul-btns'> 

<BsArrowLeftShort className='left-btn'  onClick={slideLeft}/>
<BsArrowRightShort  className='right-btn' onClick={slideRight}/>
</div>

<div className='carsoul-container' id='slider' ref={MindsliderRef}>

{fooditems?.map(({id,imageId}) =>    
(
<div className="carsoul-content"    key={id}  >
    <img  src={MIND_CARSOUL+imageId} 
  alt="image-carsoul" />
 </div>
))
}



</div>
</div> {/*
<div className="custom-shape-divider-bottom-1739262051">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div> */}
    </section>
)
};

export default WhatsOnMind;