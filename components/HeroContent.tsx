import React from 'react'

const HeroContent = () => {
  return (
    <div className="md:-mt-12 bg-transparent mx-0">

      <div className='flex-col !bg-[#0c0f15] items-center ' >

        <div>
          <div className="sec-head custom-font relative md:pt-6">
            <span className="!bg-transparent max tbg flex-row hidden md:block">NFT AR NFT AR</span>
            <h6 id="gradenttext" className="wow text-pinkBlue-gradient fadeIn leading-[1.8] !font-medium !tracking-[3.5px] md:pb-2 pb-6 pt-6 md:pt-0 !text-[12px] md:!text-[14px] "data-wow-delay=".5s">
              MINTING SOON – 9:00 AM UTC / 23RD JULY
            </h6>
            <h3 className="!bg-transparent !font-black !text-white !leading-[1.1] md:pt-5 !text-4xl md:!text-5xl !normal-case " data-splitting>
              Loozr AR Access <br /> Card Collection.
            </h3>
          </div>

        </div>

      </div>

      <div className='mx-auto flex justify-between'>
        <div className="flex flex-col-reverse bg-transparent md:!-mt-8 -mt-12 pb-12 md:pb-0 lg:flex-row">
          <div className="md:mr-8 mt-6 md:mt-0">
            <button className="button btn-primary btn-lit !flex justify-center items-center"><span className="!bg-transparent">View Collection</span></button>
          </div>
          <p className="wow txt !text-[14.7px] tracking-[0.4px] md:pr-8 text-[#9EAAC0] !font-normal md:max-w-[305px] animated" >Be an Early Backer and own a limited Loozr AR Access Card NFT for exclusive access, rewards & privileges in the Loozr ecosystem.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroContent