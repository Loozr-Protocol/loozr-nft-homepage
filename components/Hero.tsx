import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="z-10 block lg:flex bg-transparent text-transparent max-w-7xl mx-auto">

      <div className="block pr-5 w-[49%]">
        <h1 className="font-black text-[60px] leading-normal">Loozr AR Access <br /> Card Collection.</h1>

        <div className="flex pt-4 justify-between">
          <div>
            <button type="button" className="bluePink-gradient flex rounded-full py-5 px-9">
              <Link href="" className="bg-transparent font-semibold text-lg">
                View Collection
              </Link>
            </button>
          </div>

          <p className="w-[50%] text-regal-blue text-lg">Be an Early Backer and own a limited Loozr AR Access Card NFT for exclusive access, rewards & privileges in the Loozr ecosystem.</p>
        </div>
      </div>

      <div>
        <Image 
          src="/text_spinner.svg"
          width={150}
          height={150}
          alt="text spinner"
          className="animate-spin-slow rounded-xl"
        />
      </div>
    </div>
  )
}

export default Hero