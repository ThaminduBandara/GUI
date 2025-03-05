// import React from 'react'
// import './displaypct.css'
// import csI1 from '../Assets/csl1.webp'

// export default function Displaypct() {
//   return (
//     <div className='full-div'>
//         <div className='img-mid'>
//             <img className='immage' src={csI1} alt=''/>
//         </div>

//         <div className='bottom-part-para'>

//             <div className='firstP'>Welcome To New Tech Online Store</div>

//             <div className='secondP'>Sri Lanka's No 1 Electronic </div>

            
            
//         </div>
//         <div className='dashs'>
            
//         </div>

      
//     </div>
//   )
// }



// import React from 'react';
// import './Carousel.css';
// import cs1 from '../Assets/cs1.jpg';
// import cs2 from '../Assets/cs2.jpg';
// import css1 from '../Assets/css1.jpg'; 

// // import csI1 from '../Assets/csl1.webp';

// const Carousel = () => {
//   return (
//     <div className="col-12 carousel-container">
//       <div className="row">
//         <div className="carousel-wrapper">
//           <div className="carousel-indicators">
//             <button className="indicator active" data-slide-to="0" aria-label="Slide 1"></button>
//             <button className="indicator" data-slide-to="1" aria-label="Slide 2"></button>
//             <button className="indicator" data-slide-to="2" aria-label="Slide 3"></button>
//           </div>
//           <div className="carousel-inner">
//             <div className="carousel-item">
//               <img src={cs1} alt="Slide 1" className="carousel-img" />
              
//               <div className="carousel-caption ">
//                 <h5 className="poster-title">Welcome To New Tech Online Store</h5>
//                 <p className="poster-text">Sri Lanka's No 1 Electronic Products</p>
//               </div>
//             </div>
//             <div className="carousel-item active">
//               <img src={cs2} alt="Slide 2" className="carousel-img" />
              
//               <div className="carousel-caption">
//                 <h5 className="poster-title">Best Computer Accessories....</h5>
//                 <p className="poster-text">Gaming Packages for Low Price</p>
//               </div>
//             </div>
//             <div className="carousel-item ">
//               <img src={css1} alt="Slide 3" className="carousel-img" />
              
//               <div className="carousel-caption">
//                 <h5 className="poster-title">Be Free...</h5>
//                 <p className="poster-text">Experience a free delivery cost with us</p>
//               </div>
//             </div>
//           </div>
//           <button className="carousel-control-prev">
//             <span className="carousel-control-icon">&#10094;</span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next">
//             <span className="carousel-control-icon">&#10095;</span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;



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
              <img src={slide.image} alt={`Slide ${index + 1}`} className="carousel-img" />
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
