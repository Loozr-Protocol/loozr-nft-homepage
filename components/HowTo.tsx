import React from 'react';

const HowTo = () => {
  return (
    <div className="!bg-[#8369f4] text-white px-2 py-8">
      <div className='!bg-transparent'>
        <h4 className="uppercase !bg-transparent">easy steps</h4>
        <h2 className="!bg-transparent">How To Mint?</h2>
      </div>
      <div className="!bg-transparent block md:flex">
        <div className="bg-inherit flex">
          <h2 className="!bg-transparent">1</h2>
          <h1 className="!bg-transparent">Select your NFT Tier</h1>
        </div>
        <div className="!bg-transparent flex">
          <h2 className="!bg-transparent">2</h2>
          <h1 className="!bg-transparent">Connect NEAR Wallet</h1>
        </div>
        <div className="!bg-transparent flex">
          <h2 className="!bg-transparent">3</h2>
          <h1 className="!bg-transparent">Confirm transactions</h1>
        </div>
        <div className="!bg-transparent flex">
          <h2 className="!bg-transparent">4</h2>
          <h1 className="!bg-transparent">Receive your NFTs & Mainnet Rewards</h1>
        </div>
      </div>
    </div>
  )
}

export default HowTo