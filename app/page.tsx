"use client";

import React, { useState } from 'react';

import { CountdownTimer, Hero, Modal } from "@/components";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <main className="overflow-hidden p-4">
      {isModalOpen && <Modal onClose={closeModal} />}
      <div>

        <CountdownTimer />
      </div>

      <div className="relative -mt-12 bg-transparent">
        <div className="block uppercase bg-transparent">
          <div className="text-[190px] font-black bg-transparent text-transparent game">
            nft ar nft ar
          </div>
          <div className="max-w-6xl absolute top-[100px] text-pinkBlue-gradient 2xl:left-[252px] sl:left-[132px] text-xl font-semibold !bg-transparent">
            MINTING SOON - 9:00 AM UTC/23RD JUNE
          </div>
        </div>

        <div className="flex">
          <Hero />
        </div>
      </div>


    </main>
  )
}
