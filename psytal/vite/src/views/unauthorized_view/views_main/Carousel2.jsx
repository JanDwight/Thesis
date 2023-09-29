import React, { useState } from 'react';

const Carousel2 = ({ items2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items2.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items2.length - 1 : prevIndex - 1
    );
  };
  

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-gray-600"
          onClick={goToPrevSlide}
        >
          &#9664;
        </button>
        <button
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-gray-600"
          onClick={goToNextSlide}
        >
          &#9654;
        </button>
      </div>
      <div className="w-full h-64 overflow-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${items2.length * 100}%`,
          }}
        >
          {items2.map((items2, index) => (
            <div
              key={index}
              className="w-full h-64 flex-shrink-0"
              style={{ minWidth: '100%' }}
            >
              {items2}
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );

  
};



export default Carousel2;
