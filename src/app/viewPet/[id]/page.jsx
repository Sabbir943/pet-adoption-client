import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ViewPet = async ({ params }) => {
  const { id } = await params;
  const{token}= await auth.api.getToken({
    headers: await headers()
  })
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet/${id}`, {
    cache: 'no-store',
    // authorization:`Bearer ${token}`
  });
  const pet = await res.json();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 bg-transparent min-h-screen font-sans">
      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: Pet Details (7 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Image Container */}
          <div className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-foreground/5 shadow-2xl border border-foreground/[0.08]">
            <Image
              src={pet.image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1"}
              alt='pet images'
              fill
              priority
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#E04D3C] font-black text-md px-5 py-2.5 rounded-2xl shadow-sm border border-white/20">
              {pet.adoptionFee === 0 || pet.adoptionFee === '0' ? 'Free Adoption' : `${pet.adoptionFee} BDT`}
            </div>
          </div>

          {/* Core Info */}
          <div className="px-2 space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div>
                <h1 className="text-4xl font-black text-[#0B2C3D] tracking-tight">{pet.petName}</h1>
                <p className="text-gray-500 font-bold text-md mt-1 flex items-center gap-1.5">
                  📍 {pet.location || 'Dhaka, Bangladesh'}
                </p>
              </div>
              <span className={`text-md font-black px-4 py-2 rounded-2xl border ${
                pet.gender === 'Male' 
                  ? 'bg-blue-50 text-blue-600 border-blue-200' 
                  : 'bg-pink-50 text-pink-600 border-pink-200'
              }`}>
                {pet.gender === 'Male' ? '♂ MALE' : '♀ FEMALE'}
              </span>
            </div>

            {/* Grid Specs */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
                <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Breed</span>
                <span className="text-md font-black text-[#0B2C3D] truncate block">{pet.breed || 'Mixed'}</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
                <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Age</span>
                <span className="text-md font-black text-[#0B2C3D] truncate block">{pet.age || 'N/A'}</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
                <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Category</span>
                <span className="text-md font-black text-[#0B2C3D] truncate block">{pet.category || 'Pet'}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xl font-black text-[#0B2C3D] tracking-tight">About {pet.petName}</h3>
              <p className="text-gray-600 text-md leading-relaxed font-medium">
                {pet.description || "No description provided. This sweet pet is healthy, vaccinated, and looking forward to finding a warm home with loving owners."}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Adoption Status Form (5 Columns) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-md space-y-6">
            
            {/* Header Lock Info */}
            <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
              <span className="text-2xl">🔒</span>
              <div>
                <span className="text-gray-400 text-xs font-bold tracking-wider uppercase block">Adoption Lock</span>
                <h3 className="text-xl font-black text-[#0B2C3D]">Request Registered</h3>
              </div>
            </div>

            {/* Beautiful Notice Alert Box */}
            <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-5 flex gap-3.5">
              <span className="text-2xl mt-0.5">🎉</span>
              <div className="space-y-1">
                <h4 className="font-bold text-amber-950 text-md">Already Under Review!</h4>
                <p className="text-amber-900/80 text-md font-medium leading-relaxed">
                  You have already selected <strong>{pet.petName}</strong> for adoption. The shelter is actively assessing your application layout parameters.
                </p>
              </div>
            </div>

            {/* Primary Blocked Indicator Button */}
            <button 
              disabled 
              className="w-full bg-gray-100 text-gray-400 font-extrabold py-4 px-6 rounded-xl text-md cursor-not-allowed text-center transition-all"
            >
              Application Already Submitted
            </button>

            {/* Clean HeroUI Navigation Row */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
            
              
              <Link href="/dashboard/my-request" className="flex-1">
                <Button 
                  className="w-full font-bold text-md py-6 rounded-xl bg-[#E04D3C] hover:bg-[#c83a2b] text-white shadow-sm"
                >
                  Back to My Request Page
                </Button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default ViewPet;