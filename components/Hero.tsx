
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <div className="clear-both z-10 !bg-[#0c0f16] ">
      <div className="parent clear-both">

        <div className="!bg-transparent">
          <CountdownTimer />
          <HeroContent />
        </div>

        <div className="!bg-transparent clear-both">
          <HeroImage />
        </div>
      </div>


    </div>



  )
}

export default Hero