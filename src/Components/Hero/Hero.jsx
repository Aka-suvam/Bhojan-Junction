import { useState, useEffect, useCallback } from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { Herodata } from '../Hero/Herodata.jsx';


import './Hero.css';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handlePrevClick = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? Herodata.length - 1 : prevIndex - 1
    );
  }, []);

  const handleNextClick = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === Herodata.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(handleNextClick, 7700); // Change slide every 7 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, handleNextClick]);

  return (
    <section className="hero text-center" id="home">
      <ul className="hero-slider">
        {Herodata.map((item, idx) => (
          <li
            key={idx}
            className={`slider-item ${idx === activeIndex ? 'active' : ''}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img src={item.url} alt={`img-${idx}`} className="img-cover"/>
            </div>
            <p className="label-2 section-subtitle slider-reveal">{item.heading1}</p>
           
            <h1 className="display-1 hero-title slider-reveal">
              {item.heading2}
            </h1>
            <p className="body-2 hero-text slider-reveal">
              {item.heading3}
            </p>
          </li>
        ))}
      </ul>
      <button className="prev" onClick={handlePrevClick}>
        <IoIosArrowBack className="back" />
      </button>
      <button className="next" onClick={handleNextClick}>
        <IoChevronForward className="forward" />
      </button>
    </section>
  );
};

export default Hero;