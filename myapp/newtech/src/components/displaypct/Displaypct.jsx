import React, { useState } from 'react';
import './Carousel.css';
import cs1 from '../Assets/cs1.jpg';
import cs2 from '../Assets/cs2.jpg';
import css1 from '../Assets/css1.jpg'; 

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);  // Start with the first slide active

  const slides = [
    { image: cs1, title: 'Welcome To New Tech Online Store', text: "Sri Lanka's No 1 Electronic Products" },
    { image: cs2, title: 'Best Computer Accessories....', text: 'Gaming Packages for Low Price' },
    { image: css1, title: 'Be Free...', text: 'Experience a free delivery cost with us' }
  ];

  // Function to go to next slide
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to previous slide
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>

              <div className='carousel-img-div'>
                <img src={slide.image} alt={`Slide ${index + 1}`} className="carousel-img" />
              </div>
              
              <div className="carousel-caption">
                <h5 className="poster-title">{slide.title}</h5>
                <p className="poster-text">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={handlePrev}>
          <span className="carousel-control-icon">&#10094;</span>
          <span className="visually-hidden"></span>
        </button>
        <button className="carousel-control-next" onClick={handleNext}>
          <span className="carousel-control-icon">&#10095;</span>
          <span className="visually-hidden"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

