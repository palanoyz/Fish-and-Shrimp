"use client";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { useState } from "react";

export default function FishPage() {
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 100);
    }

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

            <div className="relative z-10 flex justify-between items-start p-6">
                <BackButton href="/">Back to Home</BackButton>
                <div className="text-white text-3xl font-bold drop-shadow-lg ml-auto">
                    Fish & Shrimp
                </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center pb-20" onClick={handleClick}>
                <div className="text-white text-5xl font-bold drop-shadow-lg">{count}</div>
                <Image
                    src={clicked ? "/images/fish pop.png" : "/images/fish.png"}
                    className="cursor-pointer"
                    alt="Fish"
                    width={300}
                    height={300}
                    priority
                />
            </div>
        </div>
    );
} 