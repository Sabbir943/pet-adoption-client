'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DeleteDialog from './DeleteDialog';
import EditModal from './EditModal';

import RequestModal from './RequestModal';

const ListingCard = ({ data }) => {

  const [openModal, setOpenModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {data?.length === 0 ? (
          <div className="col-span-full text-center py-20 bg-foreground/1 rounded-[2rem] border border-dashed border-foreground/10">
            <p className="text-foreground/50 font-medium">
              You have not listed any pets yet.
            </p>
          </div>
        ) : (
          data?.map((pet) => (
            <div
              key={pet._id}
              className="group relative rounded-[2.5rem] bg-foreground/2 dark:bg-zinc-900/40 backdrop-blur-md border border-foreground/[0.08] p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/20"
            >

              {/* IMAGE */}
              <div className="relative w-full aspect-4/3 rounded-[1.8rem] overflow-hidden bg-foreground/5 mb-5">

                <Image
                  src={pet.image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1"}
                  alt={pet.petName}
                  fill
                  className="object-cover"
                  unoptimized
                />

                <div className="absolute top-4 right-4 bg-background/90 text-pink-500 text-md px-3 py-1 rounded-xl">
                  {pet.adoptionFee === 0 || pet.adoptionFee === '0'
                    ? 'Free'
                    : `${pet.adoptionFee} BDT`}
                </div>

              </div>

              {/* INFO */}
              <div className="px-1 mb-6">
                <h3 className="text-2xl font-black truncate">
                  {pet.petName}
                </h3>
                <p className="text-md text-foreground/40">
                  Breed: {pet.breed || 'Mixed'}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="space-y-2.5">

                <div className="grid grid-cols-2 gap-2.5">

                  <button
                    onClick={() => {
                      setSelectedPet(pet._id);
                      setOpenModal(true);
                    }}
                    className="bg-pink-500 hover:cursor-pointer text-white text-md py-3 rounded-xl font-bold"
                  >
                    Requests
                  </button>

                  <EditModal petData={pet} />

                </div>

                <div className="grid grid-cols-2 gap-2.5">

                  <Link href={`/dashboard/my-listings/${pet._id}`}>
                    <button className="hover:cursor-pointer w-full bg-foreground text-background text-md py-3 rounded-xl font-bold">
                      View
                    </button>
                  </Link>

                  <DeleteDialog petData={pet} />

                </div>

              </div>

            </div>
          ))
        )}

      </div>

      {/* ✅ MODAL (IMPORTANT FIX) */}
      {openModal && (
        <RequestModal
          petId={selectedPet}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default ListingCard;