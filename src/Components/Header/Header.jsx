import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoContainer from "./LogoContainer.jsx";
import { FaAngleDown } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import SideLocationbar from '../SideLocationbar/SideLocationbar.jsx'
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [sidebartoggle,setSidebartoggle]=useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
   <>
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="items-one">
                <Link to={'/'} className="link" onClick={()=>{ window.scrollTo(0, 0)}}>
                    <LogoContainer />
                </Link>
                <div className="location">
                    <MdLocationOn className="location-icon" />
                    <span className="city">Kolkata</span>
                    <span className="country">West Bengal, India</span>
                    <FaAngleDown className="arrow-icon"  onClick={()=>setSidebartoggle(true)}/>
                </div>
            </div>
            <div className="items-two">
                <div className="cart">
                    <PiShoppingCartSimpleFill className="cart-icon" />
                    <p className="cart-count">2</p>
                </div>
            </div>
            
            
        </header>
        {sidebartoggle? <SideLocationbar  handleSidebartoggle={()=>setSidebartoggle(false)}  />:null }
        </>
    );
};

export default Header;