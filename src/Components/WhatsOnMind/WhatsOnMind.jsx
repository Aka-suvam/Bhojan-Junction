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



return( <section className="whats-on-mind">

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

    </section>);
};

export default WhatsOnMind;