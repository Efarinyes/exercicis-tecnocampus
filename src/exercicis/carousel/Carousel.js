import React from "react";
import { useState } from 'react';
import "./carousel.css";


// imatges
import img1 from './../../img/1.jpg';
import img2 from './../../img/2.jpg';
import img3 from './../../img/3.jpg';
import img4 from './../../img/4.jpg';
import left from './../../img/left.png';
import right from './../../img/right.png';

function Carousel() {

  const [mouSlide, setMouSlide] = useState(false);

  const showSlides = (slide) => {
    
    };

  return (
    <>
    
      <h1> Carrussel </h1>
      <hr />
      <p className="titol"> Slider de rellotges</p>
      <div className="sliderContainer">
        
        <div className="contenidorSlideShow">
          <div className="slides">
            <a href="https://google.com">
              <img
                src={img1}
                alt="dog.jpg"
              />
            </a>
            <div className = 'textSlide'>
              <p>Els millors rellotges</p>
            </div>
          </div>
          <div className="slides">
          <a href="https://google.com">
              <img
                src={img2}
                alt="dog-1.jpg"
              />
            </a>
            <div className = 'textSlide'>
              <p>Rellotges de luxe pel teu canell</p>
            </div>
          </div>
          <div className="slides">
          <a href="https://google.com">
              <img
                src={img3}
                alt="dog-3.jpg"
                
              />
            </a>
            <div className = 'textSlide'>
              <p>15% de descompte en tota la gama</p>
            </div>
          </div>
          <div className="slides">
          <a href="https://google.com">
              <img
                src={img4}
                alt="dog-4.jpg"
                
              />
            </a>
            <div className = 'textSlide'>
              <p>Unisex, per home i per dona</p>
            </div>
          </div>
        </div>

        <div className = 'controls'>
          <button className = 'boto'>
                <img src={left} alt="Arrow-left"/>
          </button>
          <button className = 'boto' id='dreta' onClick= {(slide) => showSlides()}>
          <img src={right} alt="Arrow-right"/>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
