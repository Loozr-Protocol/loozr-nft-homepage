import React from 'react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="!bg-transparent">
            <div className="z-10 bg-transparent">
              <Image 
                src="/text_spinner.svg"
                width={150}
                height={150}
                alt="text spinner"
                className="animate-spin-slow rounded-xl bg-transparent"
              />
            </div>

            <Image 
              src="/hero-img.png"
              width={450}
              height={639.5}
              alt="nft hero"
              className="bg-transparent nft-img -mt-[34rem] "
            />
    </div>
  )
}

export default HeroImage