import Image from 'next/image';
import Link from 'next/link';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <div className="flex container mx-auto relative w-full z-10 !bg-[#0c0f16] ">

      <div className="!bg-transparent">
        <CountdownTimer />
        <HeroContent />
      </div>

      <div className="!bg-transparent">
        <HeroImage />
      </div>

    </div>



  )
}

export default Hero