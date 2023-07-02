import { CountdownTimer, Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden p-4">
      <div>

        <CountdownTimer />
      </div>

      <div className="relative uppercase">
      <div className="text-[190px] font-black text-transparent game">nft ar nft ar</div>
      <div className="absolute top-[100px] text-pinkBlue-gradient 2xl:left-[200px] xl:left-[100px] text-xl font-semibold !bg-transparent">MINTING SOON - 9:00 AM UTC/23RD JUNE</div>
      </div>

      <div className="flex">
        <Hero />
      </div>

    </main>
  )
}
