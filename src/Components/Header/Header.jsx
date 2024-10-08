import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoContainer from "./LogoContainer.jsx";
import { FaAngleDown } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="items-one">
                <Link to={'/'} className="link">
                    <LogoContainer />
                </Link>
                <div className="location">
                    <MdLocationOn className="location-icon" />
                    <span className="city">Kolkata</span>
                    <span className="country">West Bengal, India</span>
                    <FaAngleDown className="arrow-icon" />
                </div>
            </div>
            <div className="items-two">
                <div className="cart">
                    <PiShoppingCartSimpleFill className="cart-icon" />
                    <p className="cart-count">0</p>
                </div>
            </div>
        </header>
    );
};

export default Header;