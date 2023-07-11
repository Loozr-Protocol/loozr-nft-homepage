import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className=" w-full txty !bg-[#11151D] relative px-6 lg:px-20 z-30 pb-0">
        <div className="!bg-transparent w-full grid grid-cols-1 lg:grid-cols-4 gap-12 pb-4 !pt-12" >
          <div className="w-full !bg-transparent" >
            <a href="/" className="logo ">
              <Image
                src="/logo-light.png"
                width={123}
                height={41}
                alt="logo"
                className='!bg-transparent'
              />             
            </a>
            <p className="!bg-transparent font-medium mt-6 text-base txt text-[#536079] tracking-[0.4px]  " >Social music streaming and DeFi platform for creators and music lovers. </p>
          </div>
          <div className="!bg-inherit w-full flex flex-col lg:items-start"> 
            <p className="!bg-inherit font-bold text-white text-lg lg:h-10">Product</p>
            <div className="!bg-inherit font-medium mt-3 lg:mt-6  text-base txt text-[#536079]">
              <div className="!bg-transparent flex items-center mt-2 ">
                <div className="!bg-transparent w-fit" >
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                <a target="_blank" href="https://docs.loozr.io/loozr-products/music-fi" className="!bg-transparent font-medium  text-base txt text-[#536079]">MusicFi</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="!bg-transparent w-fit" >
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3"/>
                </div>
                <a target="_blank" href="https://docs.loozr.io/loozr-products/social-fi" className="!bg-transparent font-medium  text-base txt text-[#536079]">SocialFI</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2">
                <div className="!bg-transparent w-fit">
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                <a target="_blank" href="https://docs.loozr.io/loozr-products/audio-video-streaming" className=" font-medium !bg-transparent text-base txt text-[#536079]">Audio/Video Streaming</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="!bg-transparent w-fit" >
                  <div className=" w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                <a target="_blank" href="https://docs.loozr.io/" className="font-medium text-base txt text-[#536079] !bg-transparent">Music NFT Marketplace</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2">
                <div className="!bg-transparent w-fit">
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3"/>
                </div>
                <a target="_blank" href="https://docs.loozr.io/loozr-products/loozrverse" className=" font-medium !bg-transparent text-base txt text-[#536079]">LOOZRverse</a>
              </div>
            </div>
          </div> 

          <div className="!bg-transparent w-full hidden lg:flex flex-col items-start"> 
            <p className="!bg-transparent font-bold text-white text-lg h-10">QUICK LINKS</p>
            <div className="!bg-transparent font-medium mt-6  text-base txt text-[#536079]">
              <div className="!bg-transparent flex items-center mt-2">
                <div className="!bg-transparent w-fit">
                  <div className=" w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                 <a target="" href="/login" className=" font-medium !bg-transparent text-base txt text-[#536079]">Launch Testnet</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="!bg-transparent w-fit" >
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                 <a target="_blank" href="https://docs.loozr.io/infrastructure/loozr-ecosystem" className=" font-medium !bg-transparent text-base txt text-[#536079]">Loozr Ecosystem</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2">
                <div className="!bg-transparent w-fit" >
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                 <a target="_blank" href="https://docs.loozr.io/infrastructure/loozr-applications" className=" font-medium !bg-transparent text-base txt text-[#536079]">Loozr Applications</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="!bg-transparent w-fit">
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3"/>
                </div>
                 <a target="_blank" href="https://docs.loozr.io/" className="!bg-transparent font-medium  text-base txt text-[#536079]">LiteDOC</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2">
                <div className="!bg-transparent w-fit">
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3"/>
                </div>
                 <a target="_blank" href="https://docs.loozr.io/tokenomics" className="!bg-transparent font-medium text-base txt text-[#536079]  " >Tokenomics</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2">
                <div className="!bg-transparent w-fit">
                  <div className=" w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                 <a target="_blank" href="https://docs.loozr.io/roadmap" className="!bg-transparent font-medium  text-base txt text-[#536079]">Roadmap</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="!bg-transparent w-fit">
                  <div className=" w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                 <a target="_blank" href="https://docs.loozr.io/team" className="!bg-transparent font-medium  text-base txt text-[#536079]">Team</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="!bg-transparent w-fit">
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3"/>
                </div>
                 <a target="_blank" href="https://docs.loozr.io/frequently-asked-questions" className=" font-medium !bg-transparent text-base txt text-[#536079]">FAQ</a>
              </div>
            </div>
          </div> 
          <div className="!bg-transparent w-full hidden lg:flex flex-col items-start " > 
            <p className="!bg-transparent font-bold text-white text-lg h-10">SOCIALS</p>
            <div className="!bg-transparent font-medium mt-6  text-base txt text-[#536079]">
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="w-fit" >
                  <div className="w-1 h-1 rounded-full bg-[#536079] mr-3"/>
                </div>
                 <a target="_blank" href="https://twitter.com/officialloozr" className="!bg-transparent font-medium  text-base txt text-[#536079]"> Twitter</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="w-fit">
                  <div className=" w-1 h-1 rounded-full bg-[#536079] mr-3"/>
                </div>
                 <a target="_blank" href="https://discord.gg/loozr" className="!bg-transparent font-medium  text-base txt text-[#536079]"> Discord  </a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="w-fit" >
                  <div className=" w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                 <a target="_blank" href="https://t.me/officialloozr" className="!bg-transparent font-medium text-base txt text-[#536079]  " > Telegram</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="!bg-transparent w-fit" >
                  <div className=" w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                 <a target="_blank" href="https://medium.com/@officialloozr" className="!bg-transparent font-medium  text-base txt text-[#536079]"> Medium </a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="!bg-transparent w-fit">
                  <div className=" w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                 <a target="_blank" href="https://www.instagram.com/officialloozr/" className="!bg-transparent font-medium  text-base txt text-[#536079]"> Instagram</a>
              </div>
              <div className="!bg-transparent flex items-center mt-2 " >
                <div className="w-fit" >
                  <div className=" w-1 h-1 rounded-full bg-[#536079] mr-3 " />
                </div>
                 <a target="_blank" href="https://www.tiktok.com/@officialloozr" className="!bg-transparent font-medium  text-base txt text-[#536079]"> Tiktok</a>
              </div>
            </div>
          </div>
        </div>
        <a href="mailto:mail@loozr.io">
          <div className="!bg-transparent flex items-center lg:my-0 my-4 " >
            <div className=" w-8 h-8 rounded-full border border-[#fff] flex justify-center items-center " >
              <svg className="!bg-transparent my-auto mx-auto " width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3617 0C11.2557 0 12.1157 0.353333 12.7483 0.987333C13.3817 1.62 13.7357 2.47333 13.7357 3.36667V8.63333C13.7357 10.4933 12.2223 12 10.3617 12H3.77568C1.91501 12 0.402344 10.4933 0.402344 8.63333V3.36667C0.402344 1.50667 1.90834 0 3.77568 0H10.3617ZM11.1157 3.46667C10.9757 3.45933 10.8423 3.50667 10.7417 3.6L7.73568 6C7.34901 6.32067 6.79501 6.32067 6.40234 6L3.40234 3.6C3.19501 3.44667 2.90834 3.46667 2.73568 3.64667C2.55568 3.82667 2.53568 4.11333 2.68834 4.31333L2.77568 4.4L5.80901 6.76667C6.18234 7.06 6.63501 7.22 7.10901 7.22C7.58168 7.22 8.04234 7.06 8.41501 6.76667L11.4223 4.36L11.4757 4.30667C11.635 4.11333 11.635 3.83333 11.4683 3.64C11.3757 3.54067 11.2483 3.48 11.1157 3.46667Z" fill="white"/>
              </svg>
            </div>
            <p className="!bg-transparent font-semibold text-base text-white ml-2 txt">mail@loozr.io</p>
          </div>
        </a>
        <div className="!bg-transparent w-full border-t border-[#536079] mt-4 py-4 lg:flex-row flex-col flex lg:justify-between  "  >
          <p className="!bg-transparent font-medium !text-sm txt text-[#536079]  " >© 2023 Loozr - All Rights Reserved.</p>
          <div className="!bg-transparent flex lg:flex-row flex-col lg:mt-0 mt-2 lg:items-start gap-2 lg:gap-5 " >
            <p className="!bg-transparent font-medium !text-sm txt text-[#536079]">Privacy policy</p>
            <p className="!bg-transparent font-medium !text-sm txt text-[#536079]">Terms of service</p>
          </div>
        </div>
      </footer>
    </>  
  )
}

export default Footer