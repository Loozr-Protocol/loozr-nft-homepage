import CountdownTimer from "./CountdownTimer";
import Image from 'next/image';
import Link from 'next/link'

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-soki p-8 rounded-lg">
        <div className="flex">
          <div>
              <Image 
                src="/hero-img.png"
                width={316.67}
                height={450}
                alt="nft hero"
                className="bg-transparent nft-img px-4"
              />          
            </div>
          <div>
            <CountdownTimer />
            <div className="pt-8">
              <h2 className="text-pinkBlue-gradient text-sm font-medium !bg-transparent tracking-[.35em]">
                MINTING SOON - 9:00 AM UTC/23RD JUNE
              </h2>
              <p className="text-4xl font-bold pt-3">Loozr AR Access Card <br /> Collection.</p>
            </div>

            <div className="flex pt-8">
              <button type="button" className="border flex rounded-full py-4 px-9 mr-4">
                <Link href="" className="bg-transparent font-semibold text-lg">
                  Learn More
                </Link>
              </button>
              <button type="button" className="bluePink-gradient flex rounded-full py-4 px-9">
                <Link href="" className="bg-transparent font-semibold text-lg">
                  View Collection
                </Link>
              </button>
            </div>

            <p className="text-someBlue pt-12">
              Already a testnet user?&nbsp; 
              <button>
                <Link href="" className="text-white">
                  Login
                </Link>
              </button>
            </p>
          </div>
        </div>


        <button className="mt-12 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};


export default Modal;
