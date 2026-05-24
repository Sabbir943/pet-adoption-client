// app/loading.js
"use client";

import { useEffect, useState } from "react";

const funnyPetMessages = [
  "Bribing the cats to step off the database server...",
  "Untangling the dog leashes in the source code...",
  "Translating 'Meow' to English (this might take a second)...",
  "Chasing a rogue tennis ball down the hallway...",
  "Shaking the treat bag to speed things up...",
  "Waking up the lazy golden retriever who runs our backend...",
  "Cleaning nose prints off the screen...",
  "Convincing a cat that cardboard boxes aren't optimal storage...",
];

export default function Loading() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) =>
        prev === funnyPetMessages.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center max-w-md">

        {/* Animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-[#E04D3C]/10 animate-ping" />

          <div className="w-20 h-20 border-4 border-dashed border-[#E04D3C] rounded-full animate-spin flex items-center justify-center">
            <span className="text-4xl animate-bounce">🐾</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#0B2C3D] flex items-center gap-1">
          Please wait....
          <span className="flex">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </h2>

        {/* Message */}
       <p className="text-gray-500 text-sm font-medium italic h-10 transition-all duration-300">
    {`"${funnyPetMessages[messageIndex]}"`}
</p>
      </div>
    </div>
  );
}