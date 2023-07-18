import CountdownTimer from "./CountdownTimer";
import Image from 'next/image';
import Link from 'next/link'
import CountDownTimerModal from "./CountDownTimerModal";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="">
      <div className="z-50 fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">

        <div className="z-50 bg-soki rounded-xl p-4 md:px-8 md:py-8 w-[390px] sm:w-[600px] xl:w-[64rem] md:mx-auto">
          <div className="flex flex-col sm:flex-row bg-transparent items-center">
            <div className="!bg-transparent md:flex ml-0 mx-auto justify-center sm:justify-start items-center hidden sm:items-start md:mt-24 ">
              <Image 
                alt="hero"
                src="/hero-img.png"
                width={168.89}
                height={240}
                className="bg-transparent md:w-[324px]"
              />
            </div>

            <div className="!bg-transparent flex flex-col items-center md:block">
              <CountDownTimerModal />

              <div>
                <div className="!bg-transparent pt-8">
                  <h2 className=" text-pinkBlue-gradient text-[12px] font-medium !bg-transparent md:tracking-[.35em] tracking-wider">
                    MINTING SOON - 9:00 AM UTC/23RD JUNE
                  </h2>
                  <p className="!bg-transparent text-2xl md:text-[30px] font-bold pt-3">Loozr AR Access Card <br /> Collection.</p>
                </div>

                <div className="!bg-transparent flex pt-8">
                  <div className="!bg-transparent">
                    <button type="button" className="!bg-transparent border flex rounded-full button justify-center items-center mr-4">
                      <Link href="https://medium.com/@officialloozr" target="_blank" className="bg-transparent">
                        Learn More
                      </Link>
                    </button>
                  </div>
                  <div className="!bg-transparent">
                    <button className="button btn-primary btn-lit !flex justify-center items-center">
                      <Link href="/" className="!bg-transparent">
                      </Link>
                      <span className="!bg-transparent">View Collection</span>
                    </button>
                  </div>
              </div>
              </div>

              <p className="!bg-transparent text-someBlue md:text-[18px] pt-12 pb-4 text-center sm:text-left">
              Already a testnet user?&nbsp; 
                <button>
                  <Link href="https://testnet.loozr.io/explore" target="_blank" className="text-white">
                    Login
                  </Link>
                </button>
              </p>
            </div>


          </div>
        </div>
        
        <div className="flex justify-center items-center bg-transparent">
          <button className="mt-6 z-50 bg-transparent text-white px-4 py-2 rounded" onClick={onClose}>
            Close
          </button>
        </div>
      </div>


    </div>
  );
};


export default Modal;
