import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import Image from 'next/image';
import AdoptionForm from '@/component/AdoptionForm';


const petDetails = async ({ params }) => {
  const { id } = await params;

  // ১. Fetch Pet Data from MongoDB
  const res = await fetch(`http://localhost:8000/pet/${id}`, {
    cache: 'no-store'
  });
  const pet = await res.json();

  // ২. Fetch User Session
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 bg-transparent min-h-screen">
      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: Pet Details (8 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Image Container */}
          <div className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-foreground/5 shadow-2xl border border-foreground/[0.08]">
            <Image
              src={pet.image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1"}
              alt={pet.petName}
              fill
              priority
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md text-pink-500 font-black text-md px-4 py-2 rounded-2xl border border-foreground/[0.05]">
              {pet.adoptionFee === 0 || pet.adoptionFee === '0' ? 'Free Adoption' : `${pet.adoptionFee} BDT`}
            </div>
          </div>

          {/* Core Info */}
          <div className="px-2 space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div>
                <h1 className="text-4xl font-black text-foreground tracking-tight">{pet.petName}</h1>
                <p className="text-pink-500 font-bold text-sm mt-1 flex items-center gap-1">
                  📍 {pet.location || 'Dhaka, Bangladesh'}
                </p>
              </div>
              <span className={`text-md font-black px-4 py-2 rounded-2xl border ${
                pet.gender === 'Male' 
                  ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' 
                  : 'bg-pink-500/10 text-pink-500 border-pink-500/20'
              }`}>
                {pet.gender === 'Male' ? '♂ MALE' : '♀ FEMALE'}
              </span>
            </div>

            {/* Grid Specs */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-foreground/[0.02] dark:bg-zinc-900/40 backdrop-blur-md p-4 rounded-2xl border border-foreground/[0.05] text-center">
                <span className="block text-[10px] text-foreground/40 font-bold uppercase tracking-wider mb-1">Breed</span>
                <span className="text-sm font-black text-foreground truncate block">{pet.breed || 'Mixed'}</span>
              </div>
              <div className="bg-foreground/[0.02] dark:bg-zinc-900/40 backdrop-blur-md p-4 rounded-2xl border border-foreground/[0.05] text-center">
                <span className="block text-[10px] text-foreground/40 font-bold uppercase tracking-wider mb-1">Age</span>
                <span className="text-sm font-black text-foreground truncate block">{pet.age || 'N/A'}</span>
              </div>
              <div className="bg-foreground/[0.02] dark:bg-zinc-900/40 backdrop-blur-md p-4 rounded-2xl border border-foreground/[0.05] text-center">
                <span className="block text-[10px] text-foreground/40 font-bold uppercase tracking-wider mb-1">Category</span>
                <span className="text-sm font-black text-foreground truncate block">{pet.category || 'Pet'}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xl font-black text-foreground tracking-tight">About {pet.petName}</h3>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed font-medium">
                {pet.description || "No description provided. This sweet pet is healthy, vaccinated, and looking forward to finding a warm home with loving owners."}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Adoption Form (5 Columns) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          {/* ক্লায়েন্ট কম্পোনেন্টে ডেটা পাস করা হলো */}
          <AdoptionForm pet={pet} user={user} />
        </div>

      </div>
    </main>
  );
};

export default petDetails;