
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <div className=" z-10 !bg-[#0c0f16]  max-w-[1280px] mx-auto">
      <div className="parent">

        <div className="!bg-transparent px-4 md:p-0">
          <CountdownTimer />
          <HeroContent />
        </div>

        <div className="!bg-transparent ">
          <HeroImage />
        </div>
      </div>


    </div>



  )
}

export default Hero