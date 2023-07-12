import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="z-10 block lg:flex bg-transparent text-transparent max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row bg-transparent">

        <div className="block lg:-mt-32 bg-transparent lg:w-[49%]">
          <h1 className="font-black bg-transparent text-4xl lg:text-[60px] leading-normal md:leading-[4.6875rem]">Loozr AR Access <br className="hidden sm:inline" /> Card Collection.</h1>

          <div className="flex flex-col-reverse sl:flex-row pt-4 justify-between bg-transparent">
            <div className="md:mr-6">
              <button type="button" className="bluePink-gradient flex rounded-full items-center justify-center mt-4 w-[212px] h-[65px]">
                <Link href="" className="bg-transparent font-semibold text-lg flex">
                  View Collection
                </Link>
              </button>
            </div>
            <p className=" text-regal-blue text-lg leading-normal">Be an Early Backer and own a limited Loozr AR Access Card NFT for exclusive access, rewards & privileges in the Loozr ecosystem.</p>

          </div>

        </div>
        <div className="flex bg-transparent mt-[24rem] md:mt-0 md:ml-[9rem]">

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
            className="bg-transparent nft-img -mt-[20rem] -ml-[9rem]"
          />
        </div>
      </div>


    </div>
  )
}

export default Hero