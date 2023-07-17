"use client";

import React, { useState } from 'react';

import { Carousel, FAQ, Footer, Hero, HowTo, Table, Modal } from "@/components";

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

  const headers = ['Benefits', 'Tier 1', 'Tier 2', 'Tier 3', 'Tier 4'];

  const data = [
    ['Access Card NFT', 'Harmony', 'Melody', 'Rhythm', 'Symphony'],
    ['Exclusive Platform Ownership', 'Yes', 'Yes', 'Yes', 'Yes'],
    ['$LZR Confirmed Airdrop', 'Yes', 'Yes', 'Yes', 'Yes'],
    ['Special Roles', 'LoozrFam', 'Builder', 'Degen', 'Degen'],
    ['Active Governance Participation', 'Yes', 'Yes', 'Yes', 'Yes'],
    ['Loozr DAO Council Membership', ' ', 'Yes', 'Yes', 'Yes'],
    ['Verified Badge', ' ', ' ', 'Yes', 'Yes'],
    ['Special Monthly Airdrops', ' ', ' ', 'Yes', 'Yes'],
    ['Loozr AR Metaverse Access', ' ', ' ', ' ', 'Yes'],
    
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

      <Table headers={headers} data={data} />

      <FAQ />

      <Footer />

    </main>
  )
}
