import ListingCard from '@/component/ListingCard';
import React from 'react';
const MyListing = async () => {

  const res = await fetch(`http://localhost:8000/addPets`, {
    cache: 'no-store',
  });
  const data = await res.json();


  const totalListings = data?.length || 0;
  
  const adoptedPets = data?.filter(pet => pet.status === 'Adopted' || pet.isAdopted === true).length || 0;
  const availablePets = totalListings - adoptedPets;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 min-h-screen bg-transparent">
      
     
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
          My Listings <span className="text-pink-500">📊</span>
        </h1>
        <p className="text-sm md:text-base text-foreground/50 font-medium mt-2">
          Manage your uploaded pets, track adoption statuses, and check incoming requests.
        </p>
      </div>

      {/* 📈 Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
        {/* Total Listings */}
        <div className="p-6 rounded-[2rem] bg-foreground/[0.02] dark:bg-zinc-900/40 backdrop-blur-md border border-foreground/[0.08] shadow-xl flex flex-col justify-between">
          <span className="text-[11px] font-black tracking-widest text-foreground/40 uppercase">Total Listings</span>
          <span className="text-4xl md:text-5xl font-black text-foreground mt-4">{totalListings}</span>
        </div>

        {/* Available */}
        <div className="p-6 rounded-[2rem] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.02] backdrop-blur-md border border-emerald-500/20 shadow-xl flex flex-col justify-between">
          <span className="text-[11px] font-black tracking-widest text-emerald-500 uppercase">Available for Adoption</span>
          <span className="text-4xl md:text-5xl font-black text-emerald-500 mt-4">{availablePets}</span>
        </div>

        {/* Adopted */}
        <div className="p-6 rounded-[2rem] bg-pink-500/[0.03] dark:bg-pink-500/[0.02] backdrop-blur-md border border-pink-500/20 shadow-xl flex flex-col justify-between">
          <span className="text-[11px] font-black tracking-widest text-pink-500 uppercase">Successfully Adopted</span>
          <span className="text-4xl md:text-5xl font-black text-pink-500 mt-4">{adoptedPets}</span>
        </div>
      </div>

      {/* 🐾 Listings Grid Component */}
     <ListingCard data={data} />

    </main>
  );
};

export default MyListing;