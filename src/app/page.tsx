import Image from "next/image";
import Navbar from "@/components/Navbar";
import BubbleAnimation from "@/components/BubbleAnimation";
import FishButton from "@/components/FishButton";
import ShrimpButton from "@/components/ShrimpButton";

export default function Home() {

  return (
    <div className="relative h-screen overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Beach.png"
          alt="Beach Background"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <BubbleAnimation />
      
      <Navbar />
      
      <div className="relative z-10 flex-1 flex items-center justify-center overflow-y-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center w-full text-center text-white pb-8 sm:pb-20 gap-4 sm:gap-8 relative">
          <div className="flex flex-col items-center sm:items-center sm:justify-center w-full sm:w-auto order-2 sm:order-none">
            <span className="sway">
              <Image src="/images/fish.png" alt="Fish" width={200} height={200} className="w-32 h-32 sm:w-[300px] sm:h-[300px]" />
            </span>
            <FishButton />
          </div>

          <div className="w-full sm:w-auto flex flex-col items-center sm:items-center order-1 sm:order-none mt-2 sm:mt-0">
            <h1 className="hidden sm:block text-4xl sm:text-6xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
              Fish & Shrimp
            </h1>
            <p className="text-xl sm:text-3xl drop-shadow-md font-bold block">
              For jobless ACS students
            </p>
          </div>
          
          <div className="flex flex-col items-center sm:items-center sm:justify-center w-full sm:w-auto order-3 sm:order-none">
            <span className="sway">
              <Image src="/images/shrimp.png" alt="Shrimp" width={200} height={200} className="w-32 h-32 sm:w-[300px] sm:h-[300px]" />
            </span>
            <ShrimpButton />
          </div>
        </div>
      </div>
    </div>
  );
}
