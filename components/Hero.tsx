import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="z-10 relative block w-full lg:flex bg-transparent container mx-auto lg:mt-32">
      <div className="md:-mt-12 bg-transparent mx-0">

        <div className='flex-col !bg-[#0c0f15] items-center ' >

          <div className="container mx-auto">
            <div className="sec-head custom-font relative">
              <span className="!bg-transparent tbg flex-row">NFT AR NFT</span>
              <h6 id="gradenttext" className="wow fadeIn leading-[1.8] !font-medium tracking-[5.4px] !text-[15px] " data-wow-delay=".5s">
                MINTING SOON – 9:00 AM UTC / 23RD JULY
              </h6>
              <h3 className="!bg-transparent !font-bold !text-white !leading-[1.1] !text-5xl " data-splitting>
                Loozr AR Access <br /> Card Collection.
              </h3>
            </div>

            </div>

        </div>

        <div className='w-[1280px] mx-auto flex justify-between'>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="mr-8">
              <button className="button btn-primary btn-lit !flex justify-center items-center"><span className="!bg-transparent">View Collection</span></button>
            </div>
            <p className="wow txt !text-[14.7px] tracking-[0.4px] md:pr-8 text-[#9EAAC0] !font-normal md:max-w-[305px] animated" >Be an Early Backer and own a limited Loozr AR Access Card NFT for exclusive access, rewards & privileges in the Loozr ecosystem.</p>
          </div>


          <div className="-mt-[16rem] !bg-transparent">
            <div className="z-10 md:mt-[6rem] bg-transparent">
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
              className="bg-transparent nft-img -mt-[20rem] "
            />
          </div>

        </div>
      </div>



    </div>
  )
}

export default Hero