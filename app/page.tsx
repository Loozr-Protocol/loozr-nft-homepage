"use client";

import React, { useState } from 'react';

import { Carousel, CountdownTimer, FAQ, Footer, Hero, HowTo, Table, Modal } from "@/components";

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



        <div className="container mx-auto">
          <Hero />
        </div>

      <div>
        <Carousel items={items} />
      </div>

      <HowTo />

      <Table />

      <FAQ />

      <Footer />

    </main>
  )
}
