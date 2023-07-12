"use client";

import React, { useState } from 'react';

import { Carousel, CountdownTimer, FAQ, Footer, Hero, HowTo, Modal } from "@/components";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      title: 'CARD OF HARMONY',
      sub: '#TIER1',
      content: 'Content 1',
    },
    {
      title: 'Card 2',
      sub: '#TIER1',
      content: 'Content 2',
    },
    {
      title: 'Card 2',
      sub: '#TIER1',
      content: 'Content 2',
    },    
    {
      title: 'Card 2',
      sub: '#TIER1',
      content: 'Content 2',
    },
    {
      title: 'Card 2',
      sub: '#TIER1',
      content: 'Content 2',
    },
  ];
  
  return (
    <main className="overflow-hidden">
      {isModalOpen && <Modal onClose={closeModal} />}
      <div className="p-4">

        <CountdownTimer />
      </div>

      <div className="p-4 relative md:-mt-12 bg-transparent">
        <div className="block uppercase bg-transparent">
          <div className="text-[190px] font-black bg-transparent text-transparent game hidden md:block">
            nft ar nft ar
          </div>
          <div className="max-w-6xl absolute top-[100px] text-pinkBlue-gradient 2xl:left-[252px] sl:left-[132px] text-base md:text-xl font-semibold !bg-transparent">
            MINTING SOON - 9:00 AM UTC/23RD JUNE
          </div>
        </div>

        <div>
          <Hero />
        </div>
      </div>

      <div>
        <Carousel items={items} />
      </div>

      <HowTo />

      <FAQ />

      <Footer />

    </main>
  )
}
