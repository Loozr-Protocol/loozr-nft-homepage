import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="z-10 block lg:flex bg-transparent text-transparent max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row">

        <div className="block pr-5 lg:w-[49%]">
          <h1 className="font-black text-3xl lg:text-[60px] leading-normal">Loozr AR Access <br className="hidden sm:inline" /> Card Collection.</h1>

          <div className="lg:flex pt-4 justify-between">
            <div>
              <button type="button" className="bluePink-gradient flex rounded-full py-5 px-9">
                <Link href="" className="bg-transparent font-semibold text-lg">
                  View Collection
                </Link>
              </button>
            </div>
            <p className="w-[53%] text-regal-blue text-lg">Be an Early Backer and own a limited Loozr AR Access Card NFT for exclusive access, rewards & privileges in the Loozr ecosystem.</p>

          </div>

        </div>
          <div className="flex bg-transparent ml-[9rem]">

            <div className="z-10 mt-[6rem] bg-transparent">
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