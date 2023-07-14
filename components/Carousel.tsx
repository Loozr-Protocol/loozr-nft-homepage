"use client";

import React, { useState } from 'react';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { IconContext } from "react-icons";

import Image from 'next/image';
import nft from "/public/nft-img.png";

interface CarouselItem {
  title: string;
  sub: string;
  content: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <div className="flex space-x-4 w-full px-6 md:px-20 py-28 bg-[#11151D]">

      <div className="md:flex space-x-4 max-w-7xl mx-auto !bg-inherit">
        {items.map((item, index) => (
          <div
            key={index}
            className={`!bg-transparent transform transition-transform duration-500 w-full md:w-1/5 ease-in-out ${
              index === activeIndex
                ? 'scale-100 opacity-100'
                : 'scale-75 opacity-50'
            }`}
          >
            <div className="max-w-xl rounded overflow-hidden shadow-lg !bg-transparent p-4">
              <Image className="w-full object-cover bg-transparent" src={nft} alt={item.title} width={300} height={300} />
              <div className="pt-4 !bg-transparent">
                <div className="bg-transparent font-bold text-[16px] mb-2 flex">{item.title}
                <span className="bg-transparent font-bold text-lg text-[#536079] mb-2">{item.sub}</span>
                </div>
                <p className="bg-transparent text-gray-700 text-base">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      <span className="!bg-transparent absolute top-0 right-0 flex space-x-2 -my-16">  
        <IconContext.Provider value={{ color: "#ff0000" }}>
          <button onClick={handlePrev} className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#536079] mr-4">
            <HiChevronLeft className="bg-transparent w-[34px] h-[34px]" />
          </button>
          </IconContext.Provider>      


        <button onClick={handleNext} className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#536079]">
          <HiChevronRight className="bg-transparent w-[34px] h-[34px] " />
        </button>
      </span>
      </div>
    </div>
  );
};

export default Carousel;