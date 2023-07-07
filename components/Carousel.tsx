"use client";

import React, { useState } from 'react';

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={handlePrev} className="p-4 bg-blue-500 text-white">
        Prev
      </button>
      <div className="flex justify-center items-center space-x-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`p-4 border ${activeIndex === index ? 'border-blue-500' : 'border-gray-300'}`}
          >
            {index + 1}
            <button className="opacity-0 hover:opacity-100">Click me</button>
          </div>
        ))}
      </div>
     
     <button
      onClick={handleNext} className="p-4 bg-blue-500 text-white">Next
      </button>
    </div>
  );
};

export default Carousel;
