"use client";

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [showTime, setShowTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("08/22/2023 23:59:59");

    const interval = setInterval(() => {
    const now = new Date()
    const difference = target.getTime() - now.getTime()

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    setDays(d);

    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    setHours(h);

    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    setMinutes(m);

    const s = Math.floor((difference % (1000* 60)) / 1000);
    setSeconds(s);


    if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
      setShowTime(true);
    }

    }, 1000)
    
    return () => clearInterval(interval)

  }, [])


  return (

    <div className="max-w-6xl mx-auto">

      {showTime ? (
        <>
          <h1>Here&apos;s the NFT</h1>
        </>
      ) : (

      <>
        <div className="pt-10">
          <div className="uppercase flex">
            <div className="flex flex-col items-center p-2.5 lg:p-4 border-t mr-4 lg:mr-6 rounded-md w-[94px]">
              <span className="lg:text-[40px] text-2xl font-black">{days}</span>
              <span className="text-[15px] lg:text-lg text-gray-400 font-medium md:pt-6">Days</span>
            </div>

            <div className="flex flex-col items-center p-2.5 lg:p-4 border-t mr-4 lg:mr-6 rounded-md w-[94px]">
              <span className="lg:text-[40px] text-2xl  font-black">{hours}</span>
              <span className="text-[15px] lg:text-lg text-gray-400 font-medium md:pt-6">Hours</span>
            </div>

            <div className="flex flex-col items-center p-2.5 lg:p-4 border-t mr-4 lg:mr-6 rounded-md w-[94px]">
              <span className="lg:text-[40px] text-2xl  font-black">{minutes}</span>
              <span className="text-[15px] lg:text-lg text-gray-400 font-medium md:pt-6">Minutes</span>
            </div>

            <div className="flex flex-col items-center p-2.5 lg:p-4 border-t mr-4 lg:mr-6 rounded-md w-[94px]">
              <span className="lg:text-[40px] text-2xl  font-black">{seconds}</span>
              <span className="text-[15px] lg:text-lg text-gray-400 font-medium md:pt-6">Seconds</span>
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default CountdownTimer