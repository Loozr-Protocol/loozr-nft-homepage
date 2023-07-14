import React from 'react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="!bg-transparent md:mt-[28rem]">
            <div className="z-10 bg-transparent md:mt-[9rem]">
              <Image 
                src="/text_spinner.svg"
                width={150}
                height={150}
                alt="text spinner"
                className="animate-spin-slow rounded-xl bg-transparent"
              />
            </div>

            <div className="!bg-transparent md:-mt-[34rem]">
              <Image 
                src="/hero-img.png"
                width={450}
                height={639.5}
                alt="nft hero"
                className="bg-transparent nft-img"
              />
            </div>
    </div>
  )
}

export default HeroImage