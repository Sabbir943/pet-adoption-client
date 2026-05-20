import React from 'react';

import PetCard from './PetCard';

const FeaturedPet = async () => {

  const res = await fetch(`http://localhost:8000/addPets`, {
    next: { revalidate: 3600 } 
  });
  const petData = await res.json();

 
  const displayedPets = petData?.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 bg-transparent">
      
      {/* Section Header */}
      <div className="text-center md:text-left mb-14">
        <div className="flex items-center justify-center md:justify-start gap-2 text-pink-500 font-bold text-xs tracking-widest uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
          Meet Our Stars 🐾
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
          Featured Pets Looking for a Home
        </h2>
        <p className="text-foreground/60 mt-3 text-sm md:text-base max-w-xl font-medium">
         Some of our most playful and sweet companions, eagerly waiting to become a part of your life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPets.map((pet) =><PetCard key={pet._id} pet={pet}/>)}
      </div>
    </section>
  );
};

export default FeaturedPet;