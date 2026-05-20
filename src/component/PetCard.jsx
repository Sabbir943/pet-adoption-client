import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const PetCard = ({pet}) => {
    return (
        <div
            key={pet._id}
            className="group relative rounded-[2.5rem] bg-foreground/3 dark:bg-zinc-900/40 backdrop-blur-md border border-foreground/[0.08] p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/20 hover:shadow-[0_20px_50px_rgba(236,72,153,0.05)]"
          >
            <div>
              {/* Image Container with Aspect Ratio */}
              <div className="relative w-full aspect-4/3 rounded-[1.8rem] overflow-hidden bg-foreground/5 mb-5">
                <Image
                  src={pet.image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1"}
                  alt={pet.petName || 'Pet'}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized // এক্সটার্নাল ইমেজ ইউআরএল হলে নেক্সট কনফিগ ডেসলারেট না করা থাকলে এটি সেফ সাইড রাখে
                />
                
                {/* Custom Adoption Fee Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md text-pink-500 font-black text-xs px-3.5 py-2 rounded-2xl border border-foreground/[0.05] shadow-sm">
                  {pet.adoptionFee === 0 || pet.adoptionFee === '0' ? 'Free Adoption' : `${pet.adoptionFee} BDT`}
                </div>
              </div>

              {/* Pet Info */}
              <div className="px-1 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black text-foreground tracking-tight group-hover:text-pink-500 transition-colors">
                    {pet.petName}
                  </h3>
                  
                  {/* Gender Badge */}
                  <span className={`text-[14px] font-bold px-3 py-1.5 rounded-xl border ${
                    pet.gender === 'Male' 
                      ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' 
                      : 'bg-pink-500/10 text-pink-500 border-pink-500/20'
                  }`}>
                    {pet.gender === 'Male' ? 'Male' : 'Female'}
                  </span>
                </div>

                {/* Sub Metadata Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs text-foreground/80 font-bold">
                  <div className="bg-foreground/3 dark:bg-zinc-800/30 p-3 rounded-2xl border border-foreground/[0.03]">
                    <span className="block text-[14px] text-foreground/40 font-semibold mb-0.5 uppercase tracking-wider">Breed</span>
                    <span className="truncate block text-foreground/80">{pet.breed}</span>
                  </div>
                  <div className="bg-foreground/3 dark:bg-zinc-800/30 p-3 rounded-2xl border border-foreground/[0.03]">
                    <span className="block text-[14px] text-foreground/40 font-semibold mb-0.5 uppercase tracking-wider">Age</span>
                    <span className="truncate block text-foreground/80">{pet.age || 'N/A'}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-foreground/60 font-semibold pl-1">
                  <span className="text-pink-500 text-md">📍</span>
                  <span className="truncate">{pet.location || 'Dhaka, Bangladesh'}</span>
                </div>
              </div>
            </div>

            {/* View Details Button */}
            <div className="mt-6 px-1">
              <Link href={`/petDetails/${pet._id}`} className="block w-full">
                <button className="w-full bg-foreground text-background font-black text-sm py-4 rounded-2xl transition-all duration-300 hover:bg-pink-500 hover:text-white active:scale-[0.98] shadow-lg shadow-foreground/5 hover:shadow-pink-500/20">
                  View Details
                </button>
              </Link>
            </div>
          </div>
    );
};

export default PetCard;