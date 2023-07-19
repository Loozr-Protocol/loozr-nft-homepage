import React from 'react';

const HowTo = () => {
  return (
    <div className="!bg-[#8369f4] text-white  w-full px-6 py-8 md:px-20">
      <div className="max-w-7xl mx-auto bg-inherit">
        <div className='!bg-transparent mb-12 mt-16'>
          <h4 className="uppercase !bg-transparent">easy steps</h4>
          <h2 className="!bg-transparent font-black text-5xl md:text-[50px]">How TO Mint?</h2>
        </div>
        <div className="!bg-transparent block md:flex justify-between">
          <div className="bg-inherit flex items-center">
            <h2 className="!bg-transparent font-black text-transparent gamer text-[80px] xl:text-[100px]">1</h2>
            <p className="!bg-transparent text-2xl md:text-[18px] xl:text-[20px] ml-5 font-bold xl:w-[128px]">Select your NFT Tier</p>
          </div>
          <div className="!bg-transparent flex items-center">
            <h2 className="!bg-transparent font-black text-transparent gamer text-[80px] xl:text-[100px]">2</h2>
            <h1 className="!bg-transparent text-2xl md:text-[18px] xl:text-[20px] ml-5 font-bold md:mr-8 xl:mr-0 xl:w-[128px]">Connect NEAR Wallet</h1>
          </div>
          <div className="!bg-transparent flex items-center">
            <h2 className="!bg-transparent font-black text-transparent gamer text-[80px] xl:text-[100px]">3</h2>
            <h1 className="!bg-transparent text-2xl md:text-[18px] xl:text-[20px] ml-5 font-bold md:mr-8 xl:mr-0 xl:w-[128px]">Confirm transactions</h1>
          </div>
          <div className="!bg-transparent flex items-center">
            <h2 className="!bg-transparent font-black text-transparent gamer text-[80px] xl:text-[100px]">4</h2>
            <h1 className="!bg-transparent text-2xl md:text-[18px] xl:text-[20px] ml-5 font-bold md:mr-8 xl:mr-0 xl:w-[228px]">Receive your NFTs & Mainnet Rewards</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowTo