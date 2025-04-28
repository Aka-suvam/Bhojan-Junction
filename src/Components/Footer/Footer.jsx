import Wave from '../../assets/images/wave.svg';
import Waves1 from '../../assets/images/wavesNegative.svg';
import { FaChevronUp } from "react-icons/fa";

import './Footer.css';

const Footer = () => {
  return (
    <>
    
 {/*  <div className='wave-divider'>
<img src={Wave} alt='ele' className='height'/> 
</div>*/}
    <footer>
    <div className="custom-shape-divider-bottom-1737418023">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
      <div className='row1'>
        <p className='footer-heading'>Bhojan-Junction</p>
        <div className='social-links'>
            <h3 className='social-heading'>Connect</h3>
            <p>LinkdIn</p>
            <p>YouTube</p>
            <p>Twitter(X)</p>
            <p>Instragram</p>

        </div>
        <div className='company'>
            <h3 className='company-heading'>Company</h3>
            <p>Privacy Policy</p>
            <p>Term & Conditions</p>
            <p>Help</p>
            <p>About</p>
            
        </div>
      </div>
      <div className='row2'>@ 2025 Bhojan-Junction  | All rights reserved</div>
     
    <div className='scroll-top' onClick={()=>{ window.scrollTo(0, 0)}}>
      <FaChevronUp  className='up-img'/>
    </div>
    </footer>
    </>
  )
}

export default Footer
