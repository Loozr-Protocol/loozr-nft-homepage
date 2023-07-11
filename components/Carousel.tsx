"use client";

import React, { useState } from 'react';

import Image from 'next/image';
import nft from "/public/nft-img.png";

const Carousel = ({ items }: { items: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <div className="flex space-x-4">

      <div className="flex space-x-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`transform transition-transform duration-500 ease-in-out ${
              index === activeIndex
                ? 'scale-100 opacity-100'
                : 'scale-75 opacity-50'
            }`}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image className="w-full" src={nft} alt={item.title} width={150} height={150} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">        
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;