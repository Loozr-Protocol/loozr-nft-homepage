"use client";

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("07/22/2023 23:59:59")

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

    }, 1000)
    
    return () => clearInterval(interval)

  }, [])


  return (
    <div>
      <div>
        <span>{days}</span>
        <span>Days</span>
      </div>

      <div>
        <span>{hours}</span>
        <span>Hours</span>
      </div>

      <div>
        <span>{minutes}</span>
        <span>Minutes</span>
      </div>

      <div>
        <span>{seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  )
}

export default CountdownTimer