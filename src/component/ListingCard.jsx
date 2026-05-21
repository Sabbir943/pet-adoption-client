import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DeleteDialog from './DeleteDialog';
import EditModal from './EditModal';

const ListingCard = ({data}) => {
   
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.length === 0 ? (
        <div className="col-span-full text-center py-20 bg-foreground/1 rounded-[2rem] border border-dashed border-foreground/10">
          <p className="text-foreground/50 font-medium">You have not listed any pets yet.</p>
        </div>
      ) : (
        data.map((pet) => (
          <div
            key={pet._id}
            className="group relative rounded-[2.5rem] bg-foreground/2 dark:bg-zinc-900/40 backdrop-blur-md border border-foreground/[0.08] p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/20"
          >
            <div>
             
              <div className="relative w-full aspect-4/3 rounded-[1.8rem] overflow-hidden bg-foreground/5 mb-5">
                <Image
                  src={pet.image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1"}
                  alt={pet.petName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  unoptimized
                />
                
               
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md text-pink-500 font-black text-xs px-3 py-1.5 rounded-xl border border-foreground/[0.05]">
                  {pet.adoptionFee === 0 || pet.adoptionFee === '0' ? 'Free' : `${pet.adoptionFee} BDT`}
                </div>
              </div>

              {/* Info Title */}
              <div className="px-1 mb-6">
                <h3 className="text-2xl font-black text-foreground tracking-tight truncate">
                  {pet.petName}
                </h3>
                <p className="text-xs font-semibold text-foreground/40 mt-1 uppercase tracking-wider">
                  Breed: {pet.breed || 'Mixed'}
                </p>
              </div>
            </div>

            
            <div className="space-y-2.5 px-1">
             
              <div className="grid grid-cols-2 gap-2.5">
               
                <button
                 
                  className="bg-pink-500/10 text-pink-500 border border-pink-500/20 font-bold text-xs py-3 rounded-xl transition-all duration-200 hover:bg-pink-500 hover:text-white active:scale-[0.97]"
                >
                  Requests
                </button>


               <EditModal petData={pet} />
              </div>

             
              <div className="grid grid-cols-2 gap-2.5">
             
                <Link href={`/`} className="w-full">
                  <button className="w-full bg-foreground text-background font-bold text-xs py-3 rounded-xl transition-all duration-200 hover:bg-foreground/80 active:scale-[0.97]">
                    View
                  </button>
                </Link>


               <DeleteDialog petData={pet}/>

              </div>
            </div>

          </div>
        ))
      )}
    </div>
    );
};

export default ListingCard;